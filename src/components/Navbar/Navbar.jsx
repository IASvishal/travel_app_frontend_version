import "./Navbar.css";
export const Navbar = () => {

    const handleSearchClick = () => {
        
    }

    return (
        <header className="heading-main d-flex  align-center">

            <h1 className="heading-one">
                <a className="link" href="/">H Harbor</a>
            </h1>
            <div className="form-container d-flex align-centre cursor-pointer shadow" onClick={handleSearchClick}>
                <span className="form-option">Any Where</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any Week</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Add guests</span>
                <span className="search material-icons-outlined">search</span>
            </div>
            <nav className="d-flex align-centre gap-large">
                <div className="nav d-flex align-centre cursor-pointer">
                    <span className="material-icons-outlined profile-option menu">menu</span>
                    <span className="material-icons-outlined profile-option person">person</span>
                </div>
            </nav>
        </header>
    );
};

