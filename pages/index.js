import React, {Component} from 'react'
import Link from "next/link";
import ContactPage from "./contact";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    HomePage
                </div>
                <Link href="/contact">Contact</Link>
                <ContactPage />
                <style jsx global >{
                    `
                        .head {
                            height: 100px;
                            width:100px;
                            background-color: blue;
                            color: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    `
                }</style>

            </div>
        )
    }
}

export default HomePage;