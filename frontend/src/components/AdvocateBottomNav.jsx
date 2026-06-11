import { Link } from "react-router-dom";
import AdvocateBottomNav
    from "../../components/AdvocateBottomNav";

function AdvocateBottomNav() {

    return (

        <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around p-3 shadow-lg">

            <Link to="/advocate/dashboard">
                Home
            </Link>

            <Link to="/advocate/calendar">
                Calendar
            </Link>

            <Link to="/advocate/add-case">
                +
            </Link>

            <Link to="/advocate/cases">
                Cases
            </Link>

            <Link to="/advocate/profile">
                Profile
            </Link>
            <AdvocateBottomNav />

        </div>

    );

}

export default AdvocateBottomNav;