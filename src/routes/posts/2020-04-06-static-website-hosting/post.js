import CertificateIssued from './certificate-issued.png';

export default {
  title: `Near free React hosting on AWS`,
  tags: ['dev ops', 'frontend', 'react'],
  spoiler: "How to host your React app on AWS",
  cardImage: CertificateIssued,
  getContent: () => import('./document.mdx'),
}