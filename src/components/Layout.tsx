
import {ReactNode} from "react";

interface LayoutPropsType {
    children: ReactNode
}

const Layout = ({children}: LayoutPropsType) => {
    return (
        <section className={``}>
            {children}
        </section>
    )
}
export default Layout;