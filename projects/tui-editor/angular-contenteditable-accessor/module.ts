import {NgModule} from '@angular/core';

import {ContenteditableValueAccessor} from './contenteditable-value-accessor';

@NgModule({
    declarations: [ContenteditableValueAccessor],
    exports: [ContenteditableValueAccessor],
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class ContenteditableValueAccessorModule {}
