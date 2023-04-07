import{S as Ra,i as ga,s as ka,k as u,q as D,a as k,l as f,m as h,r as B,h as v,c as E,J as Ea,n,b as O,G as o,H as ua,K as Da,o as Ba,e as z,u as Na,L as ba,M as ya,N as wa}from"../chunks/index.f98f7cd8.js";function fa(s,a,m){const d=s.slice();return d[5]=a[m],d}function Ia(s){let a,m=s[5].name+"",d,e,c,R;function N(){return s[4](s[5])}return{c(){a=u("div"),d=D(m),e=k(),this.h()},l(i){a=f(i,"DIV",{class:!0});var l=h(a);d=B(l,m),e=E(l),l.forEach(v),this.h()},h(){n(a,"class","commandType")},m(i,l){O(i,a,l),o(a,d),o(a,e),c||(R=wa(a,"click",N),c=!0)},p(i,l){s=i},d(i){i&&v(a),c=!1,R()}}}function Ma(s){let a,m=s[5].name+"",d,e,c,R;function N(){return s[3](s[5])}return{c(){a=u("div"),d=D(m),e=k(),this.h()},l(i){a=f(i,"DIV",{class:!0});var l=h(a);d=B(l,m),e=E(l),l.forEach(v),this.h()},h(){n(a,"class","commandType selectedCmd")},m(i,l){O(i,a,l),o(a,d),o(a,e),c||(R=wa(a,"click",N),c=!0)},p(i,l){s=i},d(i){i&&v(a),c=!1,R()}}}function ha(s){let a;function m(c,R){return c[0]===c[5]?Ma:Ia}let d=m(s),e=d(s);return{c(){e.c(),a=z()},l(c){e.l(c),a=z()},m(c,R){e.m(c,R),O(c,a,R)},p(c,R){d===(d=m(c))&&e?e.p(c,R):(e.d(1),e=d(c),e&&(e.c(),e.m(a.parentNode,a)))},d(c){e.d(c),c&&v(a)}}}function pa(s){let a=s[0].name+"",m;return{c(){m=D(a)},l(d){m=B(d,a)},m(d,e){O(d,m,e)},p(d,e){e&1&&a!==(a=d[0].name+"")&&Na(m,a)},d(d){d&&v(m)}}}function _a(s){let a,m=s[0].content+"",d;return{c(){a=new ba(!1),d=z(),this.h()},l(e){a=ya(e,!1),d=z(),this.h()},h(){a.a=d},m(e,c){a.m(m,e,c),O(e,d,c)},p(e,c){c&1&&m!==(m=e[0].content+"")&&a.p(m)},d(e){e&&v(d),e&&a.d()}}}function Va(s){let a,m,d,e,c,R,N,i,l,C,J,K,b,P,U,x,j,Q,y,X,Y,I,T,Z,aa,M,S,ea,V,G,da,L,H=s[1],p=[];for(let t=0;t<H.length;t+=1)p[t]=ha(fa(s,H,t));let _=s[0]&&pa(s),w=s[0]&&_a(s);return{c(){a=u("main"),m=u("div"),d=u("a"),e=u("div"),c=u("img"),N=D(` \r
            MEOWD`),i=k(),l=u("div"),C=u("a"),J=D("Features"),K=k(),b=u("a"),P=D("Commands"),U=k(),x=u("a"),j=D("Guide"),Q=k(),y=u("a"),X=D("Add"),Y=k(),I=u("div"),T=u("h3"),Z=D("Commands"),aa=k(),M=u("div"),S=u("div");for(let t=0;t<p.length;t+=1)p[t].c();ea=k(),V=u("div"),G=u("div"),_&&_.c(),da=k(),L=u("div"),w&&w.c(),this.h()},l(t){a=f(t,"MAIN",{});var g=h(a);m=f(g,"DIV",{class:!0});var r=h(m);d=f(r,"A",{href:!0,class:!0,id:!0});var q=h(d);e=f(q,"DIV",{class:!0});var ca=h(e);c=f(ca,"IMG",{src:!0,class:!0,alt:!0}),N=B(ca,` \r
            MEOWD`),ca.forEach(v),q.forEach(v),i=E(r),l=f(r,"DIV",{class:!0});var A=h(l);C=f(A,"A",{href:!0,class:!0});var ma=h(C);J=B(ma,"Features"),ma.forEach(v),K=E(A),b=f(A,"A",{href:!0,class:!0,id:!0});var sa=h(b);P=B(sa,"Commands"),sa.forEach(v),U=E(A),x=f(A,"A",{href:!0,class:!0});var na=h(x);j=B(na,"Guide"),na.forEach(v),Q=E(A),y=f(A,"A",{href:!0,class:!0,id:!0});var la=h(y);X=B(la,"Add"),la.forEach(v),A.forEach(v),r.forEach(v),Y=E(g),I=f(g,"DIV",{class:!0});var F=h(I);T=f(F,"H3",{});var ia=h(T);Z=B(ia,"Commands"),ia.forEach(v),aa=E(F),M=f(F,"DIV",{class:!0});var W=h(M);S=f(W,"DIV",{class:!0});var ta=h(S);for(let oa=0;oa<p.length;oa+=1)p[oa].l(ta);ta.forEach(v),ea=E(W),V=f(W,"DIV",{class:!0});var $=h(V);G=f($,"DIV",{class:!0});var va=h(G);_&&_.l(va),va.forEach(v),da=E($),L=f($,"DIV",{class:!0});var ra=h(L);w&&w.l(ra),ra.forEach(v),$.forEach(v),W.forEach(v),F.forEach(v),g.forEach(v),this.h()},h(){Ea(c.src,R="/lgoo1.png")||n(c,"src",R),n(c,"class","logoHeader"),n(c,"alt","Meowd Logo"),n(e,"class","branding"),n(d,"href","/"),n(d,"class","nav"),n(d,"id","brand"),n(C,"href","/features"),n(C,"class","nav"),n(b,"href","/commands"),n(b,"class","nav"),n(b,"id","selected"),n(x,"href","/guide"),n(x,"class","nav"),n(y,"href","https://kwiii.xyz/pagenotfound"),n(y,"class","nav"),n(y,"id","addBtn"),n(l,"class","links"),n(m,"class","navbar"),n(S,"class","commandTypes commandBoth"),n(G,"class","titleCommands"),n(L,"class","commmandList"),n(V,"class","commandsMain commandBoth"),n(M,"class","commandBreak"),n(I,"class","mainContent2")},m(t,g){O(t,a,g),o(a,m),o(m,d),o(d,e),o(e,c),o(e,N),o(m,i),o(m,l),o(l,C),o(C,J),o(l,K),o(l,b),o(b,P),o(l,U),o(l,x),o(x,j),o(l,Q),o(l,y),o(y,X),o(a,Y),o(a,I),o(I,T),o(T,Z),o(I,aa),o(I,M),o(M,S);for(let r=0;r<p.length;r+=1)p[r]&&p[r].m(S,null);o(M,ea),o(M,V),o(V,G),_&&_.m(G,null),o(V,da),o(V,L),w&&w.m(L,null)},p(t,[g]){if(g&7){H=t[1];let r;for(r=0;r<H.length;r+=1){const q=fa(t,H,r);p[r]?p[r].p(q,g):(p[r]=ha(q),p[r].c(),p[r].m(S,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=H.length}t[0]?_?_.p(t,g):(_=pa(t),_.c(),_.m(G,null)):_&&(_.d(1),_=null),t[0]?w?w.p(t,g):(w=_a(t),w.c(),w.m(L,null)):w&&(w.d(1),w=null)},i:ua,o:ua,d(t){t&&v(a),Da(p,t),_&&_.d(),w&&w.d()}}}function Aa(s,a,m){let d=[{name:"Moderation",content:`
                    <div class="commandBlock">
                        <div class="commandName">/ban</div>
                        <div class="commandDesc">Ban a user from the server.</div>
                        <div class="commandExample">/ban [@user] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/kick</div>
                        <div class="commandDesc commandRow">Remove someone from the server.</div>
                        <div class="commandExample commandRow">/kick [@user] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/mute</div>
                        <div class="commandDesc commandRow">Stop a user from talking for a set time.</div>
                        <div class="commandExample commandRow">/mute [@user] [time] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/unmute</div>
                        <div class="commandDesc commandRow">Let a muted user talk.</div>
                        <div class="commandExample commandRow">/unmute [@user] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/warn</div>
                        <div class="commandDesc commandRow">Officially warn a user.</div>
                        <div class="commandExample commandRow">/warn [@user] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/modlogs</div>
                        <div class="commandDesc commandRow">Check a given users moderation history.</div>
                        <div class="commandExample commandRow">/modlogs [@user]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/remove</div>
                        <div class="commandDesc commandRow">Remove a given modlog from a user.</div>
                        <div class="commandExample commandRow">todo</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/purge</div>
                        <div class="commandDesc commandRow">Remove a number of messages.</div>
                        <div class="commandExample commandRow">/purge [number]</div>
                    </div>`},{name:"Utility",content:`
                    <div class="commandBlock">
                        <div class="commandName commandRow">/poll</div>
                        <div class="commandDesc commandRow">Set up community polls.</div>
                        <div class="commandExample commandRow">/poll [title] [option1, option2]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/report</div>
                        <div class="commandDesc commandRow">Report a user to the mods.</div>
                        <div class="commandExample commandRow">/report [@user] [reason]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/whois</div>
                        <div class="commandDesc commandRow">Information about a user's account.</div>
                        <div class="commandExample commandRow">/whois [@user]</div>
                    </div>`},{name:"Fun",content:`
                    <div class="commandBlock">
                        <div class="commandName commandRow">/otter</div>
                        <div class="commandDesc commandRow">Get a cute otter picture.</div>
                        <div class="commandExample commandRow">/otter [number]</div>
                    </div>`},{name:"Info",content:`
                    <div class="commandBlock">
                        <div class="commandName commandRow">/stats</div>
                        <div class="commandDesc commandRow">See Meowd's stats.</div>
                        <div class="commandExample commandRow">/stats</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/ping</div>
                        <div class="commandDesc commandRow">See Meowd's ping.</div>
                        <div class="commandExample commandRow">/ping</div>
                    </div>`},{name:"Config",content:`
                    <div class="commandBlock">
                        <div class="commandName commandRow">/config otter add</div>
                        <div class="commandDesc commandRow">Add a channel for daily otter pictures.</div>
                        <div class="commandExample commandRow">/config otter add [#channel]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/config otter remove</div>
                        <div class="commandDesc commandRow">Remove a channel for daily otter pictures.</div>
                        <div class="commandExample commandRow">/config otter remove [#channel]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/config otter list</div>
                        <div class="commandDesc commandRow">List channels set to recieve otter pictures.</div>
                        <div class="commandExample commandRow">/config otter list</div>
                    </div>

                    <div class="commandBlock">
                        <div class="commandName commandRow">/config rules add</div>
                        <div class="commandDesc commandRow">Add a rule.</div>
                        <div class="commandExample commandRow">/config rules add [rule]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/config rules remove</div>
                        <div class="commandDesc commandRow">Remove a rule.</div>
                        <div class="commandExample commandRow">/config rules remove [rule]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/config rules list</div>
                        <div class="commandDesc commandRow">List all rules.</div>
                        <div class="commandExample commandRow">/config rules list</div>
                    </div>

                    <div class="commandBlock">
                        <div class="commandName commandRow">/config logchannel</div>
                        <div class="commandDesc commandRow">Set the logging channel.</div>
                        <div class="commandExample commandRow">/config logchannel [#channel]</div>
                    </div>
                    `},{name:"Misc",content:`
                    <div class="commandBlock">
                        <div class="commandName commandRow">/help</div>
                        <div class="commandDesc commandRow">Get help.</div>
                        <div class="commandExample commandRow">/help</div>
                    </div>`}],e;function c(i){m(0,e=i)}return Ba(()=>{m(0,e=d[0])}),[e,d,c,i=>c(i),i=>c(i)]}class xa extends Ra{constructor(a){super(),ga(this,a,Aa,Va,ka,{})}}export{xa as default};
