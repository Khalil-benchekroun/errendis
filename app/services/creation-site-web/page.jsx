import { getService } from '@/lib/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const service = getService('creation-site-web');

export const metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: '/services/creation-site-web' },
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}