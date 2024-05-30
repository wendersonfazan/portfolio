import { SectionTitles } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import {useTranslations} from "next-intl";

export const WorkExperience = () => {
  const translateWorkExperience = useTranslations('workExperience')
  const translateCommons = useTranslations('common')

  return (
    <section className="bg-slate-900">
      <div className="container py-16 flex gap-10 md:gap-4 flex-col md:flex-row lg:gap-16">
        <div className="max-w-[428px]">
          <SectionTitles
            subtitle={translateCommons('experience')}
            title={translateCommons('professionalExperience')}
          />
          <p className="text-gray-400 mt-6">
            {translateWorkExperience('mainTitle')}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceItem />
        </div>
      </div>
    </section>
  )
}
