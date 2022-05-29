export default function PageTitle({ title }) {
  return (
    <h1 className="mt-16 mb-5 font-bold text-3xl" data-test="page-title">
      {title}
    </h1>
  );
}
