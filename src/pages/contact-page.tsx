import { useState } from 'react'

import { ContactDetails } from '../components/contact/ContactDetails'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactHero } from '../components/contact/ContactHero'
import { ContactMap } from '../components/contact/ContactMap'
import { ConsultationTypes } from '../components/contact/ConsultationTypes'
import { Faq } from '../components/contact/Faq'
import { InstagramShowcase } from '../components/contact/InstagramShowcase'
import { Container } from '../components/ui/container'

export function ContactPage() {
  const [selectedType, setSelectedType] = useState('')
  return <><ContactHero /><section className="bg-surface py-28 sm:py-36 lg:py-48"><Container><div className="max-w-4xl"><p className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">A first conversation</p><h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">Every remarkable space begins with a conversation.</h2></div><div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-7"><ContactForm selectedType={selectedType} onSelectType={setSelectedType} /></div><aside className="lg:col-span-4 lg:col-start-9"><p className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">Studio information</p><ContactDetails /></aside></div></Container></section><ConsultationTypes selectedType={selectedType} onSelect={setSelectedType} /><ContactMap /><Faq /><InstagramShowcase /></>
}
