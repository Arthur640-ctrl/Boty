"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "./auth.module.css"
import Loader from "../components/Loader"

import { Info, CircleX} from "lucide-react"

export default function Auth() {
    const [is_login, set_is_login] = useState(false)
    const [is_loading, set_is_loading] = useState(false)

    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const [confirm_password, set_confirm_password] = useState("")

    const [is_popup, set_popup] = useState(false)
    const [is_error, set_is_error] = useState(false)
    const [popup_text, set_popup_text] = useState("") 

    function handle_auth() {
        if (is_login) {
            login()
        } else {
            register()
        }
    }

    function login() {
        
    }

    async function register() {
        
        if (password !== confirm_password) {
            set_is_error(true)
            set_popup_text("The passwords do not match")
            set_popup(true)
            return
        }
        
        const credential = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "password": password
        }

        set_is_loading(true)
        
        const API_URL = process.env.NEXT_PUBLIC_API_URL

        try {
            const response = await fetch(API_URL + "/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credential)
            })

            const data = await response.json()
            
            if (!response.ok) {
                set_is_error(true)
                set_popup_text(data.message)
                set_popup(true)
                return
            }

        } catch {
            set_is_error(true)
            set_popup_text("Internal server error")
            set_popup(true)
            return
        } finally {
            set_is_loading(false)
            set_is_error(false)
            set_popup_text("Account created. Thank !")
            set_popup(true)
        }
        

    }

    return (
        <div className={styles.page}>
            
            {is_loading && (
                <div className={styles.loader}>
                    <Loader/>
                </div>
            )}

            {is_popup && (
                <div className={styles.popup_background}>
                    <div className={styles.popup_container}>
                        <div className={styles.popup_infos}>
                            <div className={`${styles.popup_icon} ${is_error ? styles.popup_icon_error : ""}`}>
                                {!is_error && (
                                    <Info size={20} color="#006AFD"/>
                                )}

                                {is_error && (
                                    <CircleX size={20} color="#fd0000"/>
                                )}
                            </div>
                            <div className={styles.popup_text_wrapper}>
                                <span className={styles.popup_title}>
                                    {is_error ? "An error has occurred" : "Information"}
                                </span>
                                <span className={styles.popup_text}>{popup_text}</span>
                            </div>
                        </div>
                        <button className={styles.popup_button} onClick={() => set_popup(false)}>
                            Continue
                        </button>
                    </div>
                </div>
            )}

            <div className={styles.card}>
                <Link href="/" className={styles.backButton}>
                    ← Retour à l'accueil
                </Link>

                <div className={styles.switch}>
                    <div
                        className={`${styles.slider} ${!is_login ? styles.right : ""}`}
                    />

                    <button
                        className={is_login ? styles.active : ""}
                        style={{ cursor: "not-allowed" }}
                        onClick={() => set_is_login(true)}
                        disabled
                    >
                        Login
                    </button>

                    <button
                        className={!is_login ? styles.active : ""}
                        onClick={() => set_is_login(false)}
                    >
                        Register
                    </button>
                </div>

                <div className={styles.form}>
                    <h1>{is_login ? "Welcome" : "Create an account"}</h1>

                    {!is_login && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => set_first_name(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={(e) => set_last_name(e.target.value)}
                        />
                    </>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => set_email(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => set_password(e.target.value)}
                    />

                    {!is_login && (
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => set_confirm_password(e.target.value)}
                    />
                    )}

                    <button className={styles.submit} onClick={handle_auth}>
                        {is_login ? "Login" : "Create my account"}
                    </button>
                </div>
            </div>
        </div>
    )
}