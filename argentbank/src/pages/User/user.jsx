import Account from '../../components/Account/Account.jsx';
import EditName from '../../components/EditName/EditName.jsx';
import './User.css';

function User() {
    return (
        <main class="main bg-dark">
            <div class="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Stark!
                </h1>
                <EditName />
            </div>
            <Account
                accountTitle={'Argent Bank Checking (x8349)'}
                accountAmount={'$2,082.79'}
                accountDescription={'Available Balance'}
            />
            <Account
                accountTitle={'Argent Bank Savings (x6712)'}
                accountAmount={'$10,928.42'}
                accountDescription={'Available Balance'}
            />
            <Account
                accountTitle={'Argent Bank Credit Card (x8349)'}
                accountAmount={'$184.30'}
                accountDescription={'Current Balance'}
            />
        </main>
    );
}

export default User;