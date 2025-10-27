export default function SEOJsonLd({ data }) {
  const arr = Array.isArray(data) ? data : [data];
  return arr.map((item, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
  ));
}
