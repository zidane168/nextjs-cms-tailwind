import { useRouter } from 'next/router'
import en from '../../public/lang/en.js'
import zho from '../../public/lang/zho.js'

const useTrans = () => {
    const { locale } = useRouter() 
    const trans = locale === 'zho' ? zho : en 
    return trans
}

export default useTrans