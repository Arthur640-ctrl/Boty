"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "./auth.module.css"
import Loader from "../components/Loader"

export default function Auth() {
  const [is_login, set_is_login] = useState(false)
  const [is_loading, set_is_loading] = useState(false)
    
  return (
    <div className={styles.page}>
        
        {is_loading && (
            <div className={styles.loader}>
                <Loader/>
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
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                    />
                </>
                )}

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                {!is_login && (
                <input
                    type="password"
                    placeholder="Confirm Password"
                />
                )}

                <button className={styles.submit}>
                    {is_login ? "Login" : "Create my account"}
                </button>
            </div>
        </div>
    </div>
  )
}