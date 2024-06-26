import SectionSvg from '../assets/svg/SectionSvg'

const Section = ({
  className,
  customPadding,
  id,
  crosses,
  crossOffset,
  children,
}) => {
  return (
    <section
      id={id}
      className={`relative ${customPadding || 'py-10 lg:py-16 xl:py-20'} ${
        crosses ? 'lg:py-32 xl:py-40' : ''
      } ${className || ''}`}
    >
      {children}

      <div className="absolute top-0 hidden left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="absolute top-0 hidden right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossOffset && crossOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          ></div>
          <SectionSvg crossesOffset={crossOffset} />
        </>
      )}
    </section>
  )
}
export default Section
