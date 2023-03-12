import { AvailableLanguages, useUserStore } from '@/app/utils/store/globalStore'
import { useMemo } from 'react'

export default function useFieldsByLanguage<T>(ObjectLanguage: Record<AvailableLanguages, T>) {
  const currentLanguage = useUserStore(state => state.lang)
  const language = useMemo(() => {
    return ObjectLanguage[currentLanguage]
  }, [currentLanguage])
  return language || ObjectLanguage.eng
}
