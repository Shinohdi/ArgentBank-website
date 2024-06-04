import { createSlice } from '@reduxjs/toolkit';
import { selectUser } from '../utils/selector';

export async function fetchOrUptadeUser(dispatch, getState) {
    const status = selectUser(getState()).status;
    if (status === 'pending' || status === 'updating') {
        return;
    }
    dispatch(actions.fetching());
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${window.sessionStorage.getItem(
                        'token'
                    )}`,
                },
            }
        );
        const data = await response.json();
        dispatch(actions.resolved(data.body));
    } catch (error) {
        dispatch(actions.rejected(error));
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'void',
        userData: null,
        error: null,
    },
    reducers: {
        setVoid: (draft) => {
            if (draft.status !== 'void') {
                draft.status = 'void';
                draft.userData = null;
                draft.error = null;
            }
        },
        fetching: (draft) => {
            if (draft.status === 'void') {
                // on passe en pending
                draft.status = 'pending';
                return;
            }
            // si le statut est rejected
            if (draft.status === 'rejected') {
                // on supprime l'erreur et on passe en pending
                draft.error = null;
                draft.status = 'pending';
                return;
            }
            // si le statut est resolved
            if (draft.status === 'resolved') {
                // on passe en updating (requête en cours mais des données sont déjà présentent)
                draft.status = 'updating';
                return;
            }
            // sinon l'action est ignorée
            return;
        },
        // resolved action & reducer
        resolved: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en resolved et on sauvegarde les données
                draft.userData = action.payload;
                draft.status = 'resolved';
                return;
            }
            // sinon l'action est ignorée
            return;
        },
        // rejected action & reducer
        rejected: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                draft.status = 'rejected';
                draft.error = action.payload;
                draft.userData = null;
                return;
            }
            // sinon l'action est ignorée
            return;
        },
    },
});

const { actions, reducer } = userSlice;

export const { fetching, resolved, rejected, setVoid } = actions;

export default reducer;
