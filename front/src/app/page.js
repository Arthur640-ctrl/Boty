import styles from "./page.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>

      <section className={styles.hero}>
        <div className={styles.hero_element}>
          <h1>Build <span className={styles.text_accent}>Discord bots</span> <br /> in <span className={styles.text_accent}>minutes</span></h1>
          <h2>
            No VPS headaches. No infrastructure pain. No complicated setup. <br /> 
            Code it yourself or use AI on our online code editor. <br />
            Deploy instantly.
          </h2>
          <div className={styles.cta_container}>
            <Link className={styles.hero_primary} href="/auth">Start building free</Link>
            <Link className={styles.hero_secondary} href="#pricing">See pricing</Link>
          </div>
        </div>
        
        <div className={styles.hero_visual_container}>
          <div className={styles.glow_effect}></div>
          <div className={styles.mockup_window}>
            <div className={styles.window_header}>
              <span className={styles.dot_red}></span>
              <span className={styles.dot_yellow}></span>
              <span className={styles.dot_green}></span>
              <span className={styles.window_title}>boty-project</span>
            </div>
            <div className={styles.window_content}>
              <div className={styles.abstract_editor}>
                <div className={`${styles.line} ${styles.purple} ${styles.w80}`}></div>
                <div className={`${styles.line} ${styles.blue} ${styles.w60}`}></div>
                <div className={`${styles.line} ${styles.green} ${styles.w90}`}></div>

                <div className={styles.spacer}></div>

                <div className={`${styles.line} ${styles.yellow} ${styles.w40}`}></div>
                <div className={`${styles.line} ${styles.purple} ${styles.w70}`}></div>
                <div className={`${styles.line} ${styles.blue} ${styles.w55}`}></div>

                <div className={styles.spacer}></div>

                <div className={`${styles.line} ${styles.green} ${styles.w85}`}></div>
                <div className={`${styles.line} ${styles.yellow} ${styles.w50}`}></div>
                <div className={`${styles.line} ${styles.purple} ${styles.w75}`}></div>
              </div>
              
              <div className={styles.discord_card}>
                <div className={styles.discord_header}>
                  <div className={styles.discord_avatar}>🤖</div>
                  <div>
                    <div className={styles.discord_bot_name}>Boty <span className={styles.bot_tag}>BOT</span></div>
                    <div className={styles.discord_status}>Online & ready</div>
                  </div>
                </div>
                <div className={styles.discord_body}>
                  <span className={styles.discord_command}>/moderation</span> deployed successfully.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
      
      <section className={styles.presentation} id="paths">
        <span className={styles.section_title}>Three paths</span>
        <h1 className={styles.presentation_title}>Pick <span className={styles.text_accent}>your skill</span>, we handle <span className={styles.text_accent}>the rest</span></h1>
        <div className={styles.path_card_container}>

          <div className={styles.path}>
            <span className={styles.path_title}>Vibe Code</span>
            <p className={styles.path_description}>No coding experience? Describe what you want, and our AI builds it for you. Perfect for non-technical creators.</p>
            <ul className={styles.path_list}>
              <li>100% no-code</li>
              <li>AI writes your bot code</li>
              <li>Deploy in seconds</li>
            </ul>
          </div>

          <div className={styles.path}>
            <span className={styles.path_title}>Mix Bot</span>
            <p className={styles.path_description}>Code your bot with AI assistance. Write snippets, get real-time completions, and build exactly what you need with our in-browser editor and AI co-pilot.</p>
            <ul className={styles.path_list}>
              <li>Text-to-code AI completion</li>
              <li>In-browser code editor with syntax highlighting</li>
              <li>Best for developers learning or moving fast</li>
            </ul>
          </div>

          <div className={styles.path}>
            <span className={styles.path_title}>Custom Bot</span>
            <p className={styles.path_description}>You're a developer. Upload your bot code (Python, JavaScript, etc.), and we handle hosting, updates, and monitoring.</p>
            <ul className={styles.path_list}>
              <li>Write your own code</li>
              <li>We host it reliably</li>
              <li>Full control, zero infra pain</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
      
      <section className={styles.features}>
        <span className={styles.section_title}>Why Boty</span>
        <h1 className={styles.presentation_title}>Everything you need,<br /> <span className={styles.text_accent}>nothing you dont</span></h1>
        <div className={styles.features_grid}>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>Deploy instantly</span>
            <span className={styles.feature_card_desc}>No VPS setup. No SSH. No terminal commands. Click deploy and your bot is live.</span>
          </div>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>Reliable hosting</span>
            <span className={styles.feature_card_desc}>Your bot runs 24/7 on our infrastructure. We handle uptime, updates, and monitoring.</span>
          </div>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>AI powered code generation</span>
            <span className={styles.feature_card_desc}>Describe what you want, and AI writes the code. Great for learning too.</span>
          </div>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>All in one dashboard</span>
            <span className={styles.feature_card_desc}>Manage all your bots, check logs, monitor performance, and update code—all in one place.</span>
          </div>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>Built in code editor</span>
            <span className={styles.feature_card_desc}>VSCode-like editor right in your browser. Syntax highlighting, auto-complete, instant feedback.</span>
          </div>

          <div className={styles.feature_card}>
            <span className={styles.feature_card_title}>No credit card required</span>
            <span className={styles.feature_card_desc}>Start free. Build your bot. Pay only when you're ready to scale.</span>
          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
      
      <section className={styles.pricing_section} id="pricing">
        <span className={styles.section_title}>Pricing</span>
        <h1 className={styles.presentation_title}>
          Choose <span className={styles.text_accent}>your plan</span>
        </h1>

        <div className={styles.pricing_grid}>
          <article className={styles.pricing_card}>
            <span className={styles.pricing_badge}>Getting started</span>
            <h3 className={styles.pricing_title}>Free</h3>
            <p className={styles.pricing_price}>0€ <span>by month</span></p>
            <p className={styles.pricing_desc}>Perfect for testing and learning.</p>
            <ul className={styles.pricing_feature_list}>
              <li>1 active bot</li>
              <li>Vibe Code (limited AI tokens)</li>
              <li>Community support</li>
            </ul>
            <button className={styles.pricing_button}>Start free</button>
          </article>

          <article className={`${styles.pricing_card} ${styles.pricing_card_popular}`}>
            <span className={styles.pricing_badge}>Most Popular</span>
            <h3 className={styles.pricing_title}>Pro</h3>
            <p className={styles.pricing_price}>5.99€ <span>by month</span></p>
            <p className={styles.pricing_desc}>For serious builders.</p>
            <ul className={styles.pricing_feature_list}>
              <li>2 active bots</li>
              <li>Large AI token generation</li>
              <li>All modules and customization</li>
              <li>Custom bot code uploads</li>
              <li>Priority email support</li>
              <li>Advanced analytics</li>
              <li>99% uptime</li>
            </ul>
            <button className={styles.pricing_button}>Start Pro trial</button>
          </article>

          <article className={styles.pricing_card}>
            <span className={styles.pricing_badge}>For teams</span>
            <h3 className={styles.pricing_title}>Studio</h3>
            <p className={styles.pricing_price}>1.99€ <span>by bot</span></p>
            <p className={styles.pricing_desc}>Scale without limits.</p>
            <ul className={styles.pricing_feature_list}>
              <li>Unlimited active bots</li>
              <li>Team workspace & collaboration</li>
              <li>Custom integrations</li>
              <li>Dedicated support channel</li>
              <li>Advanced monitoring & logs</li>
              <li>99% uptime</li>
            </ul>
            <button className={styles.pricing_button}>Contact sales</button>
          </article>
        </div>
      </section>
      <div className={styles.separator}></div>
      
      <Footer />

    </div>
  )
}