import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-detail/photo-details.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ 
        PhotoModule,
        PhotoDetailsModule,
        PhotoFormModule,
        PhotoListModule,
//        RouterModule,
        DarkenOnHoverModule
    ],
/*    declarations: [
        RouterModule
    ],*/
    exports: [
        RouterModule
    ]
})
export class PhotosModule {}