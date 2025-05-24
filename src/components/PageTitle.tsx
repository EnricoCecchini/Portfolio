
interface PageTitleInterface{
    title: string
}

function PageTitle({title}: PageTitleInterface) {
  return (
    <>
        <h1 className="w-full text-3xl font-bold text-left">{title}</h1>
    </>
  )
}

export default PageTitle