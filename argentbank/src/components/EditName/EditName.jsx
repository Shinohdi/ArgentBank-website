import { selectUser } from '../../utils/selector';
import { selectLogin } from '../../utils/selector';
import { useSelector } from 'react-redux';
import { changeUserName } from '../../features/user';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './EditName.css';

function EditName() {
    const user = useSelector(selectUser).userData;
    const token = useSelector(selectLogin).token;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState(user?.userName);

    async function HandleSubmit(event) {
        event.preventDefault();
        const newUserName = {
            userName: userName,
        };

        const body = JSON.stringify(newUserName);

        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: body,
            }
        );
        const resp = await response.json();

        if (resp.status === '200') {
            await dispatch(changeUserName(resp.body.userName));
            setUserName(resp.body.userName);
            setIsOpen(false);
        } else {
            return;
        }
    }

    function HandleEdit(action) {
        setIsOpen(action);
        setUserName(user?.userName);
    }

    return !isOpen ? (
        <button className="edit-button" onClick={() => HandleEdit(true)}>
            Edit Name
        </button>
    ) : (
        <div>
            <form
                className="edit-form"
                onSubmit={(event) =>
                    userName === ''
                        ? event.preventDefault()
                        : HandleSubmit(event)
                }
            >
                <div>
                    <label htmlFor="username">User name: </label>
                    <input
                        type="text"
                        id="username"
                        className="edit-form_input"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First name: </label>
                    <input
                        type="text"
                        id="firstName"
                        className="edit-form_input readOnly"
                        value={user?.firstName}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name: </label>
                    <input
                        type="text"
                        id="lastName"
                        className="edit-form_input readOnly"
                        value={user?.lastName}
                        readOnly
                    />
                </div>
                <div className="edit-form_buttons">
                    <button type="submit" name="save" className="edit-button">
                        Save
                    </button>
                    <button
                        className="edit-button"
                        onClick={() => HandleEdit(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditName;
