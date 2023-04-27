import { newGuid } from 'utils/guid'
import { ReactComponent as ArrowDown } from '../assets/icons/ArrowDown.svg'
import { ReactComponent as ArrowLeft } from '../assets/icons/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/ArrowRight.svg'
import { ReactComponent as Center } from '../assets/icons/Center.svg'
import { ReactComponent as Checkbox } from '../assets/icons/Checkbox.svg'
import { ReactComponent as Close } from '../assets/icons/Close.svg'
import { ReactComponent as Copy } from '../assets/icons/Copy.svg'
import { ReactComponent as Edit } from '../assets/icons/Edit.svg'
import { ReactComponent as Exit } from '../assets/icons/Exit.svg'
import { ReactComponent as Home } from '../assets/icons/Home.svg'
import { ReactComponent as Minus } from '../assets/icons/Minus.svg'
import { ReactComponent as Pdf } from '../assets/icons/files/Pdf.svg'
import { ReactComponent as Plus } from '../assets/icons/Plus.svg'
import { ReactComponent as Search } from '../assets/icons/Search.svg'
import { ReactComponent as Spinner } from '../assets/icons/Spinner.svg'
import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg'
import { ReactComponent as Visibility } from '../assets/icons/Visibility.svg'
import { ReactComponent as VisibilityOff } from '../assets/icons/VisibilityOff.svg'

export type IconType =
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Center'
  | 'Checkbox'
  | 'Close'
  | 'Copy'
  | 'Edit'
  | 'Exit'
  | 'Home'
  | 'Minus'
  | 'Pdf'
  | 'Plus'
  | 'Search'
  | 'Spinner'
  | 'Telegram'
  | 'Visibility'
  | 'VisibilityOff'

export const iconTypes = new Map([
  ['ArrowDown', <ArrowDown key={newGuid()} />],
  ['ArrowLeft', <ArrowLeft key={newGuid()} />],
  ['ArrowRight', <ArrowRight key={newGuid()} />],
  ['Center', <Center key={newGuid()} />],
  ['Checkbox', <Checkbox key={newGuid()} />],
  ['Close', <Close key={newGuid()} />],
  ['Copy', <Copy key={newGuid()} />],
  ['Edit', <Edit key={newGuid()} />],
  ['Exit', <Exit key={newGuid()} />],
  ['Home', <Home key={newGuid()} />],
  ['Minus', <Minus key={newGuid()} />],
  ['Pdf', <Pdf key={newGuid()} />],
  ['Plus', <Plus key={newGuid()} />],
  ['Search', <Search key={newGuid()} />],
  ['Spinner', <Spinner key={newGuid()} />],
  ['Telegram', <Telegram key={newGuid()} />],
  ['Visibility', <Visibility key={newGuid()} />],
  ['VisibilityOff', <VisibilityOff key={newGuid()} />],
])
