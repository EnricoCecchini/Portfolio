
interface PageTitleInterface{
    title: string
}

function PageTitle({title}: PageTitleInterface) {
  return (
    <>
        <h1 className="w-full text-2xl font-bold text-left">{title}</h1>
    </>
  )
}

export default PageTitle