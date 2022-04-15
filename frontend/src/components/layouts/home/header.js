import React, { Component } from "react";
import "../../../App.css";

import Mensajes from "../../../components/layouts/mensajes/Mensajes";

class Header extends Component {
    render() {
        return (
            <div>
              <Mensajes />
            </div>
        );
    }
}

export default Header;