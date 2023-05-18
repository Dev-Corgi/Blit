import controllerSet from './ControllerSet';
import GuageController from './GuageController';
import ScrollController from './ScrollController';

const globalscrollcontroller = new ScrollController(0)
const globalguage = new GuageController(globalscrollcontroller.eventTarget,"scrollevent",0,200)
controllerSet.setValue("globalguage",globalguage.eventTarget)
controllerSet.setValue("globalscroll",globalscrollcontroller.eventTarget)