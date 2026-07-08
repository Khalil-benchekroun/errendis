import { getService } from '@/lib/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const service = getService('application-mobile');

export const metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: '/services/application-mobile' },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}