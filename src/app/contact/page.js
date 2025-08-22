'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CTABand } from '@/components/CTABand'

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [submitText, setSubmitText] = useState('Send message')
  const [honeypot, setHoneypot] = useState('') // bots will (hopefully) fill this
  const isDisabled = status === 'loading'

  async function handleSend(e) {
    e.preventDefault()
    if (honeypot) return // silently drop bots

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)

    try {
      setStatus('loading')
      setSubmitText('Sending…')
      // 👉 POST to your API route (adjust path/provider as needed)
      const res = await fetch('/api/form/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form).toString(),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setSubmitText('Sent!')
      e.target.reset()
    } catch (err) {
      setStatus('error')
      setSubmitText('Try again')
    } finally {
      setTimeout(() => {
        setStatus('idle')
        setSubmitText('Send message')
      }, 4000)
    }
  }

  return (<>
    <main className="container mx-auto min-h-[80vh] px-4 py-16 md:py-24">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl mx-auto text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-libre-baskerville">Let’s design something welcoming</h1>
        <p className="opacity-80 mt-3">
          Tell us about your senior living community or short‑term rental. We’ll follow up quickly.
        </p>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* Info card */}
        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="card bg-base-100 border shadow-sm"
        >
          <div className="card-body">
            <h2 className="card-title">Contact</h2>
            <p className="opacity-80">
              Prefer email or a quick call? We’re happy to connect however works best for you.
            </p>
            <div className="mt-4 space-y-2">
              <a className="link link-hover block" href="mailto:brandi@blyndesign.com">
                brandi@blyndesign.com
              </a>
              <a className="link link-hover block" href="tel:9895130354">
                989‑513‑0354
              </a>
              <a
                className="link link-hover block"
                href="https://instagram.com/blyndesignco"
                target="_blank"
                rel="noreferrer"
              >
                @blyndesignco
              </a>
            </div>
            <div className="divider" />
            <ul className="text-sm space-y-2">
              <li>• Certified in E‑design, Staging/Redesign, Styling</li>
              <li>• Insured</li>
              <li>• Based in the U.S., working nationwide</li>
            </ul>
          </div>
        </motion.aside>

        {/* Form card */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="card bg-base-100 border shadow-sm"
        >
          <form onSubmit={handleSend} className="card-body">
            {/* Honeypot */}

            <input type="text" name="company" value={honeypot} onChange={(e)=>setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="text" name="form-name" value="contact" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 md:grid-cols-2">
              <label className="form-control">
                <span className="label-text">Name</span>
                <input className="input input-bordered" name="name" type="text" placeholder="Your name" required />
              </label>
              <label className="form-control">
                <span className="label-text">Email</span>
                <input className="input input-bordered" name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="form-control">
                <span className="label-text">Phone (optional)</span>
                <input className="input input-bordered" name="phone" type="tel" placeholder="(xxx) xxx‑xxxx" />
              </label>
              <label className="form-control">
                <span className="label-text">Project type</span>
                <select name="projectType" className="select select-bordered">
                  <option>Senior Living</option>
                  <option>Short‑Term Rental</option>
                  <option>Staging</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className="form-control">
              <span className="label-text">Message</span>
              <textarea className="textarea textarea-bordered min-h-[120px]" name="message" placeholder="Tell us about your project…" required />
            </label>

            <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
              <p className="text-xs opacity-70 flex-0 max-w-xs " >
                By sending, you agree to be contacted about your project. We won’t share your info.
              </p>
              <button
                type="submit"
                disabled={isDisabled}
                className={`flex-1 btn btn-primary ${isDisabled ? 'btn-disabled loading' : ''}`}
              >
                {submitText}
              </button>
            </div>

            {status === 'success' && (
              <div className="alert alert-success mt-4">
                <span>Thanks! Your message was sent. We’ll be in touch shortly.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error mt-4">
                <span>Something went wrong. Please try again or email us directly.</span>
              </div>
            )}
          </form>
        </motion.section>
      </div>

      {/* CTA band */}
      {/* <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mt-12 rounded-2xl bg-primary text-primary-content p-8 md:p-10"
      > */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Prefer to browse first?</h2>
            <p className="opacity-90">See how we balance comfort, safety, and style.</p>
          </div>
          <Link href="/projects" className="btn btn-accent">
            View our work
          </Link>
        </div> */}
        
      {/* </motion.section> */}
    </main>
    <CTABand
    heading='Prefer to browse first?'
    subheading='See how we balance comfort, safety, and style.'
    buttonLink="/projects"
    buttonText="View our work"
  />
  </>
  )
}


// "use client"

// // import { PortableText } from "next-sanity"
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/client";
// // import { redirect } from 'next/navigation'

// const SETTINGS_QUERY = `*[_type == "settings"][0]`;
// const options = { next: { revalidate: 30 } };

// const ContactPage =  () => {

//     const [sending, setSending] = useState(false)
//     const [settings, setSettings] = useState(null)

//     const handleSend = (event) => {
//         setSending(true)
//         event.preventDefault()

//         const formElement = event.target;
//         const formData = new FormData(formElement);
//         console.log(new URLSearchParams(formData).toString());

//         if (formData.get('honeypot')) {
//             console.log('bot detected');
//             setTimeout(()=>{
//                 event.target.reset()
//                 setSending(false)
//             // handleClose()
//             }, 2000)
//             return
//         }

//         fetch("/api/form/contact", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: new URLSearchParams(formData).toString(),
//         })
//             .then((res) => {console.log(res);res.json()})
//             .then((data) => {

//                 console.log(data);
//                 setTimeout(()=>{
//                     event.target.reset()
//                     setSending(false)
//                 // handleClose()
//                 }, 2000)
//             })
//             .catch((error) => alert(error));
//     }

//     const submitText = sending ? "Sending..." : "Send Message";
//     const isDisabeld = sending || !settings?.contactEmail;

//     // let settings = await client.fetch(SETTINGS_QUERY, {}, options);
//     // const settings = {
//     //     contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null
//     // };


//     useEffect(() => {
//         const fetchSettings = async () => {
//              const _settings = await client.fetch(SETTINGS_QUERY, {}, options);
//             setSettings(_settings);
//             if (!_settings?.contactEmail) {
//                 console.warn("Contact email is not set in settings.");
//             }
//         };
//         fetchSettings();
//     }
//     , []);

//     return (<>
//     <main className="mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 md:pt-36">
//         <div className="prose mx-auto h-screen w-full">
//           <h1 className="text-4xl font-bold mb-8 text-center font-libre-baskerville">Contact</h1>
//           <div>
//             <form  onSubmit={handleSend} className="flex flex-col gap-4 bg-base-200 p-4 rounded-xl drop-shadow w-full">
//                 <input type="hidden" name="form-name" value="contact" />
//                 <input type="hidden" name="honeypot" value="" />
//                 <input className="input" placeholder="Name" type="text" name="name"></input>
//                 <input className="input" placeholder="Email" type="email" name="email"></input>
//                 <textarea className="textarea" placeholder="Message" name="message"></textarea>
//                 {/* {settings?.contactEmail ? */}
//                     <input type="submit" value={submitText} disabled={isDisabeld} className="btn btn-primary"></input>
//                     {/* :
//                     (<span className="text-error text-center">Form is currently inactive.</span>)
//                 } */}
//             </form>
//           </div>
//         </div>
//     </main>
//     </>)
// }

// export default ContactPage