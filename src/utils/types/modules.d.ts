import { ROUTES } from '~/core/navigation';
import { RouteProp } from '~/modules';

declare global {
  namespace Modules {
    export type { RouteProp };
    export { ROUTES };
  }
}
