import * as React from "react";
import { Meta } from "../components/meta";
import Footer from "../components/footer";

interface Props {
    children: any
}

const Layout: React.FC<Props> =
    ({ children }) => (
        <div>
            <Meta />
            { children }
            <Footer/>
        </div>
    )

export default Layout