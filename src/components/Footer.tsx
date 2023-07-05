import clsx from 'clsx'

export function Footer({ className}: {className:string}) {
  return (
    <footer className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      <div className="border-t border-slate-200 pt-10 pb-16 dark:border-slate-200/5">
        <FooterContent />
      </div>
    </footer>
  )
}

function FooterContent() {
  return (
    <div className="text-center">
      <p className="mt-4 text-sm leading-6 text-slate-500">
        &copy; {new Date().getFullYear()} Tailwind Labs Inc. All rights reserved.
      </p>
    </div>
  )
}

Footer.Content = FooterContent