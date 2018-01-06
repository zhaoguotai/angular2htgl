import { Component, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
declare var tinymce: any;

@Component({
    moduleId: module.id,
    selector: 'post_article',
    templateUrl: 'post_article.component.html'
})

export class post_articleComponent implements OnInit,OnDestroy {
    public editor;
    constructor() { }

    ngOnInit() {
        //var id=<HTMLElement>window.frames["getContent"].document.getElementById("myBtn")
        //console.log(window.frames["getContent"])
        var frame=window.frames["getContent"];
        //var id=<HTMLElement>frame.document.getElementById("myBtn")
        console.dir(frame)
    }

    getContent(){

    }












    // ngAfterViewInit() {
    //     /**
    //      *  【非常重要】
    //      *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
    //      */
    // 	  tinymce.init({
    //   		  selector: '#post_editor',
    //         skin_url: '/assets/skins/lightgray',
    //         //menubar:false,
    //   		  plugins: [
    //           'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    //           'searchreplace wordcount visualblocks visualchars code fullscreen',
    //           'insertdatetime media nonbreaking save table contextmenu directionality',
    //           'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
    //         ],
    //         toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    //         toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
    //         image_advtab: true,
    //         codesample_content_css:'/assets/css/prism.css',
    //         //文件和图片上传相关的选项
    //         file_browser_callback_types: 'image',
    //         file_browser_callback: function(field_name, url, type, win) {
    //           if(type=='image'){
    //               let event = new MouseEvent('click', {
    //                 'view': window,
    //                 'bubbles': true,
    //                 'cancelable': true
    //               });
    //               let fileInput = document.getElementById('img_input');
    //               fileInput.dispatchEvent(event);
    //           }
    //         },
    //         setup: editor => {
    //       		this.editor = editor;
    //       		editor.on('keyup', () => {
    //         			const content = editor.getContent();
    //         			console.log(content);
    //       		});
    //   		  }
    // 	    });
  	// }



    ngOnDestroy(){}
}
