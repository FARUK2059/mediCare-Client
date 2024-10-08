import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import useAuth from "../../Hooks/UseAuth/useAuth";
import { toast } from "react-toastify";

import iconImg from "../../assets/Rgister/RegisterImg.png"
import useMedicinCard from "../../Hooks/UseMedicincard/useMedicinCard";
// import useRole from "../../Hooks/Role/useRole";



const Navbar = () => {
    const { user, logOut } = useAuth();
    const [shop] = useMedicinCard();
    // const navigate = useNavigate();
    // const [ role ] = useRole();
    // console.log(role);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut successfull")
            })
            .catch()
    }



    const navMenu = <>

        <li><NavLink to="/"  > Home </NavLink></li>
        <li><NavLink to="shop" > Shop </NavLink></li>

        <li><NavLink to="cartpage" >
            <div className="indicator">
                <span><TiShoppingCart className="h-6 w-6" /></span>
                <span ></span>
                <span className="badge badge-md bg-white text-black border-none  indicator-item">+{shop.length}</span>
            </div>
        </NavLink></li>

        {/* <li><Link className="p-1 m-0" >

            <select className="select select-bordered bg-none select-sm p-0 m-1">
                <option>English</option>
                <option>Bangla</option>
            </select>


        </Link></li> */}

    </>

    // const handleDashboardClick = () => {
    //     if (role) {
    //         if (role.role === 'admin') {
    //             navigate('deshoard/adminhome');
    //         } else if (role.role === 'seller') {
    //             navigate('/sellerhome');
    //         } else {
    //             navigate('/userpay');
    //         }
    //     }
    // };

    const profile = <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="null" src={user?.photoURL} />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-center text-blue-500"> {user?.displayName || "not found"} </a>
                </li>
                <li>
                    <a> Update Profile </a>
                </li>
                <li><Link to="/deshoard" >Dashboard</Link></li>
                <li><Link onClick={handleSignOut}>Logout</Link></li>
            </ul>
        </div>
    </>

    return (
        <div>
            <div className="navbar  fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52 gap-4">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"> <img className="h-8 w-12" src={iconImg} alt="" /> MadiCare</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link className="btn">{profile}</Link> : <Link to="login" className="btn">Join Us</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;