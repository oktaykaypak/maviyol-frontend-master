import DocumentRepository from './DocumentRepository'
import GeneralRepository from './GeneralRepository'
import DescriptionRepository from './DescriptionRepository'
import InsuranceRepository from './InsuranceRepository'
import EquipmentRepository from './EquipmentRepository'
import PricingRepository from './PricingRepository'
import ReservationRepository from './ReservationRepository'
import DiscountRepository from './DiscountRepository'
import ExtraRepository from './ExtraRepository'
import PublishRepository from './PublishRepository'
import PhotoRepository from './PhotoRepository'
import CalendarRepository from './CalendarRepository'

export default ({ $axios, store }) => {
  const dependency = {
    $axios,
  }

  const repositories = {
    general: GeneralRepository,
    publish: PublishRepository,
    document: DocumentRepository,
    description: DescriptionRepository,
    insurance: InsuranceRepository,
    equipment: EquipmentRepository,
    pricing: PricingRepository,
    reservation: ReservationRepository,
    discount: DiscountRepository,
    extra: ExtraRepository,
    photo: PhotoRepository,
    calendar: CalendarRepository,
  }

  // Inject Dependency
  Object.keys(repositories).map(
    (repositoryKey) =>
      (repositories[repositoryKey] = repositories[repositoryKey](dependency))
  )

  return repositories
}
