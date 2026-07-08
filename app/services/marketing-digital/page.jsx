import { getService } from '@/lib/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const service = getService('marketing-digital');

export const metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: '/services/marketing-digital' },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}