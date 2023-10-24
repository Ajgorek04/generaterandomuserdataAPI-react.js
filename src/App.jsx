import "./App.css";
import { Checked } from "../components/Checked";
import { Generate } from "../components/Generate";
import { useState } from "react";
import { List } from "../components/List";

function App() {
    const [selectedOptions, setSelectedOptions] = useState([
        "ID",
        "Login",
        "Email",
        "Gender",
        "Name",
        "Phone",
        "Date of Birth",
        "Location",
        "Registration Date",
        "Picture",
    ]);

    const [showList, setShowList] = useState(false);
    const [showSelectedCheckbox, setShowSelectedCheckbox] = useState(true);

    const handleShowList = () => {
        setShowList(true);
        setShowSelectedCheckbox(false);
    };

    return (
        <div className="container">
            <header>
                <h1>Generate Random User Data</h1>
            </header>
            <img
                src="./src/assets/userIcon.png"
                alt="img"
                className="userPNG"
            />
            <p className="pText">Choose what data you want to generate</p>
            {showSelectedCheckbox && (
                <Checked
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                />
            )}

            <Generate
                selectedOptions={selectedOptions}
                handleShowList={handleShowList}
                showSelectedCheckbox={showSelectedCheckbox}
                setShowSelectedCheckbox={setShowSelectedCheckbox}
            />
            {showList && <List selectedOptions={selectedOptions} />}
        </div>
    );
}

export default App;
