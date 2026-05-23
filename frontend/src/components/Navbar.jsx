import {Link} from "react-router-dom";
import {PlusIcon} from "lucide-react";

const Navbar = ({theme,setTheme}) => {

    const toggleTheme = () => {
        setTheme(theme === "cupcake" ? "forest" : "cupcake");
    }

    return(
        <header className="bg-base-300 border-b border-base-content/10">            
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Notely</h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn btn-primary">
                        <PlusIcon className="size-5"/>
                        <span>New Note</span>
                        </Link>
                    </div>
                    <button className="btn btn-primary" onClick={toggleTheme}>
                        {theme==="forest" ? "Light Mode" : "Dark mode"}
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Navbar;