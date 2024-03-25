import assetLogo from '@web/assets/logo.svg'

type Props = Exclude<React.ComponentPropsWithoutRef<'img'>, 'src' | 'alt'>

export function Logo(props: Props) {
  return <img src={assetLogo} alt="logo" {...props} />
}
