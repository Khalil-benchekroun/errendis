import { getService } from '@/lib/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const service = getService('creation-saas');

export const metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: '/services/creation-saas' },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}