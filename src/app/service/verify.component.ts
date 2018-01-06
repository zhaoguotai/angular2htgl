import { Injectable } from '@angular/core';

@Injectable()

export class verifyService {
    constructor() { 
        
    }
    getAllLetter(){
        let letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
		return letterStr.split(",");
    }
    //初始化验证码
    _init(option) {
            let options=option
			let con = document.getElementById(options.id);
			let canvas = document.createElement("canvas");
			options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
			options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
			canvas.id = options.canvasId;
			canvas.width = options.width;
			canvas.height = options.height;
			canvas.style.cursor = "pointer";
			canvas.innerHTML = "您的浏览器版本不支持canvas";
			con.appendChild(canvas);
			canvas.onclick = function(){
				this.refresh(this.options);
			}.bind(this)
		}
    randomNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
    randomColor(min, max) {
		var r = this.randomNum(min, max);
		var g = this.randomNum(min, max);
		var b = this.randomNum(min, max);
		return "rgb(" + r + "," + g + "," + b + ")";
	}
    canvas;
    ctx:CanvasRenderingContext2D;
    refresh(options) {
			options.code = "";
			this.canvas =<HTMLCanvasElement>document.getElementById(options.canvasId);
            // console.log(this.canvas.getContext('2d'))
            if(this.canvas.getContext) {
				var ctx = this.canvas.getContext('2d');
			}else{
				return;
			}
            ctx.textBaseline = "middle";

			ctx.fillStyle = this.randomColor(180, 240);
			ctx.fillRect(0, 0, options.width, options.height);

			if(options.type == "blend") { //判断验证码类型
				var txtArr = options.numArr.concat(options.letterArr);
			} else if(options.type == "number") {
				var txtArr = options.numArr;
			} else {
				var txtArr = options.letterArr;
			}

			for(var i = 1; i <= 4; i++) {
				var txt = txtArr[this.randomNum(0, txtArr.length)];
				options.code += txt;
				ctx.font = this.randomNum(options.height/2, options.height) + 'px SimHei'; //随机生成字体大小
				ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色		
				ctx.shadowOffsetX = this.randomNum(-3, 3);
				ctx.shadowOffsetY = this.randomNum(-3, 3);
				ctx.shadowBlur = this.randomNum(-3, 3);
				ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
				var x = options.width / 5 * i;
				var y =options.height / 2;
				var deg = this.randomNum(-30, 30);
				/**设置旋转角度和坐标原点**/
				ctx.translate(x, y);
				ctx.rotate(deg * Math.PI / 180);
				ctx.fillText(txt, 0, 0);
				/**恢复旋转角度和坐标原点**/
				ctx.rotate(-deg * Math.PI / 180);
				ctx.translate(-x, -y);
			}
			/**绘制干扰线**/
			for(var i = 0; i < 4; i++) {
				ctx.strokeStyle = this.randomColor(40, 180);
				ctx.beginPath();
				ctx.moveTo(this.randomNum(0, options.width), this.randomNum(0, options.height));
				ctx.lineTo(this.randomNum(0, options.width), this.randomNum(0, options.height));
				ctx.stroke();
			}
			/**绘制干扰点**/
			for(var i = 0; i < options.width/4; i++) {
				ctx.fillStyle = this.randomColor(0, 255);
				ctx.beginPath();
				ctx.arc(this.randomNum(0, options.width), this.randomNum(0, options.height), 1, 0, 2 * Math.PI);
				ctx.fill();
			}
		};
        

    GVerify(){
        return function(option){
             
             this.options = { //默认options参数值
			        id: "", //容器Id
			        canvasId: "verifyCanvas", //canvas的ID
			        width: "100", //默认canvas宽度
			        height: "30", //默认canvas高度
			        type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
			        code: ""
		        };
                this.options=option;
                if(Object.prototype.toString.call(this.options) == "[object Object]"){//判断传入参数类型
			        for(var i in this.options) { //根据传入的参数，修改默认参数值
				        this.options[i] = this.options[i];
			        }
		        }else{
			        this.options.id = this.options;
		        }
                this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
		        this.options.letterArr = this.getAllLetter();
                this._init(this.options);
                this.refresh(this.options);
                console.log(this.canvas)
            }.bind(this)
        
    }
}