'use client'

import { useEffect, useState } from "react"

const themes = [
    {title: 'Default', value: 'default'},
    {title: 'Light', value: 'light'},
    {title: 'Dark', value: 'dark'},
    {title: 'Cupcake', value: 'cupcake'},
    {title: 'Bumblebee', value: 'bumblebee'},
    {title: 'Emerald', value: 'emerald'},
    {title: 'Corporate', value: 'corporate'},
    {title: 'Synthwave', value: 'synthwave'},
    {title: 'Retro', value: 'retro'},
    {title: 'Cyberpunk', value: 'cyberpunk'},
    {title: 'Valentine', value: 'valentine'},
    {title: 'Halloween', value: 'halloween'},
    {title: 'Garden', value: 'garden'},
    {title: 'Forest', value: 'forest'},
    {title: 'Aqua', value: 'aqua'},
    {title: 'Lofi', value: 'lofi'},
    {title: 'Pastel', value: 'pastel'},
    {title: 'Fantasy', value: 'fantasy'},
    {title: 'Wireframe', value: 'wireframe'},
    {title: 'Black', value: 'black'},
    {title: 'Luxury', value: 'luxury'},
    {title: 'Dracula', value: 'dracula'},
    {title: 'CMYK', value: 'cmyk'},
    {title: 'Autumn', value: 'autumn'},
    {title: 'Business', value: 'business'},
    {title: 'Acid', value: 'acid'},
    {title: 'Lemonade', value: 'lemonade'},
    {title: 'Night', value: 'night'},
    {title: 'Coffee', value: 'coffee'},
    {title: 'Winter', value: 'winter'},
    {title: 'Dim', value: 'dim'},
    {title: 'Nord', value: 'nord'},
    {title: 'Sunset', value: 'sunset'},
    {title: 'B. Lyn Design', value: 'blyn'},
  ]

const ThemePicker = () => {
    const [currentTheme, setCurrentTheme] = useState('blyn')

    useEffect(() => {
        const theme = document.querySelector('#theme-wrapper').getAttribute('data-theme')
        const savedTheme = window.localStorage.getItem('theme')

        // if (theme) {
        //     if (savedTheme) {
        //         setCurrentTheme(savedTheme)
        //     } else {
        //         setCurrentTheme(theme)
        //     }
        // }

        setCurrentTheme('blyn')
        
        
        
    }, [])

    const handleThemeChange = (theme) => {
        document.querySelector('#theme-wrapper').setAttribute('data-theme', theme)
        setCurrentTheme(theme)
        
        if (theme === 'default') {
            window.localStorage.removeItem('theme')
            location.reload()
            return
        }

        window.localStorage.setItem('theme', theme)
    }


    return (<>
        <select aria-label="Theme" className="select select-bordered select-sm" value={currentTheme} onChange={(e) => handleThemeChange(e.target.value)}>
            <option disabled>Theme Preview</option>
            {themes.map((theme, index) => {
                return <option key={index} value={theme.value}>{theme.title}</option>
            })}
        </select>
    </>)
}

export default ThemePicker