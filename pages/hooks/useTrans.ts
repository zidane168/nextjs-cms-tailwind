import { useRouter } from 'next/router'
import en from '../../public/lang/en.js'
import zho from '../../public/lang/zho.js'

const useTrans = () => {
    const { asPath, locale } = useRouter() 
    const language = locale === 'zho' ? zho : en 
    return { language, asPath, locale }
}

export default useTrans