import{c as D,l as I,m as T,n as A}from"./chunk-FEEVKWG5.js";import{Ba as F,Da as l,Ua as w,Va as N,Wa as R,za as C}from"./chunk-WHDZIOUL.js";import{$a as b,Db as E,L as u,La as g,M as c,O as f,Q as o,Rb as M,Wa as h,Xa as x,Ya as m,_a as v,_b as S,ga as p,nc as k,rb as y,rc as r,ub as z,yc as d}from"./chunk-MOOMXTUD.js";var B=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var V=`
    ${B}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,P={root:({instance:e})=>["p-textarea p-component",{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()==="filled","p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize==="small","p-textarea-lg p-inputfield-lg":e.pSize==="large","p-invalid":e.invalid()}]},H=(()=>{class e extends C{name="textarea";style=V;classes=P;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=u({token:e,factory:e.\u0275fac})}return e})();var L=new f("TEXTAREA_INSTANCE"),ae=(()=>{class e extends A{bindDirectiveInstance=o(l,{self:!0});$pcTextarea=o(L,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=r();fluid=r(void 0,{transform:d});invalid=r(void 0,{transform:d});$variant=k(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new g;ngControlSubscription;_componentStyle=o(H);ngControl=o(D,{optional:!0,self:!0});pcFluid=o(w,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275dir=m({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(i,n){i&1&&E("input",function($){return n.onInput($)}),i&2&&M(n.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",d],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[S([H,{provide:L,useExisting:e},{provide:F,useExisting:e}]),b([l]),v]})}return e})(),oe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=x({type:e});static \u0275inj=c({})}return e})();var ue=(()=>{let a=class a{constructor(){this.text="",this.ariaLabel="More information"}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=h({type:a,selectors:[["app-info-tooltip"]],inputs:{text:"text",ariaLabel:"ariaLabel"},decls:1,vars:4,consts:[["type","button","icon","ph ph-question","severity","secondary","styleClass","info-tooltip-button","tooltipPosition","top","tooltipStyleClass","catalog-distribution-tooltip",3,"rounded","text","ariaLabel","pTooltip"]],template:function(n,s){n&1&&z(0,"p-button",0),n&2&&y("rounded",!0)("text",!0)("ariaLabel",s.ariaLabel)("pTooltip",s.text)},dependencies:[R,N,T,I],encapsulation:2});let e=a;return e})();export{ae as a,oe as b,ue as c};
