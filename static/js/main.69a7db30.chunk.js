(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(7),r=i.n(c),s=(i(15),i(9)),a=i(2),n=i(1),l=(i(16),i(10)),d=(i(17),i(18),i(0)),o=function(e){var t=e.title,i=e.description,c=e.imgUrl,r=e.imdbUrl;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:c,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t})})]}),Object(d.jsxs)("div",{className:"content",children:[i,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:r,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,Object(l.a)({},e),e.imdbId)}))})},m=i(4),b=i.n(m),h=(i(20),function(e){var t=e.onAdd,i=e.validId,c=Object(n.useState)(""),r=Object(a.a)(c,2),s=r[0],l=r[1],o=Object(n.useState)(""),j=Object(a.a)(o,2),m=j[0],h=j[1],O=Object(n.useState)(""),u=Object(a.a)(O,2),p=u[0],x=u[1],g=Object(n.useState)(""),v=Object(a.a)(g,2),w=v[0],M=v[1],N=Object(n.useState)(""),f=Object(a.a)(N,2),_=f[0],U=f[1],I=Object(n.useState)(""),y=Object(a.a)(I,2),T=y[0],B=y[1],S=Object(n.useState)(""),k=Object(a.a)(S,2),z=k[0],A=k[1],D=Object(n.useState)(""),F=Object(a.a)(D,2),V=F[0],Y=F[1],C=Object(n.useState)(""),E=Object(a.a)(C,2),Z=E[0],X=E[1],L=function(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(e)};return Object(d.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("table",{className:"NewMovie__table",children:[Object(d.jsx)("caption",{children:"Add Form"}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"title",children:"Title"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{id:"title",type:"text",value:s,placeholder:"Title",className:b()({NewMovie__borderError:""!==T}),onChange:function(e){l(e.target.value),B("")}})}),Object(d.jsx)("td",{className:"NewMovie__error",children:T})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"Description",children:"Description"})}),Object(d.jsx)("td",{children:Object(d.jsx)("textarea",{id:"Description",placeholder:"Description",value:m,onChange:function(e){h(e.target.value)}})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"imgUrl",children:"Image Url"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{id:"imgUrl",type:"text",value:p,placeholder:"imgUrl",className:b()({NewMovie__borderError:""!==z}),onChange:function(e){x(e.target.value),A("")}})}),Object(d.jsx)("td",{className:"NewMovie__error",children:z})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"imdbUrl",children:"IMDb Url"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{id:"imdbUrl",type:"text",value:w,placeholder:"imdbUrl",className:b()({NewMovie__borderError:""!==V}),onChange:function(e){M(e.target.value),Y("")}})}),Object(d.jsx)("td",{className:"NewMovie__error",children:V})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("label",{htmlFor:"imdbId",children:"imdbId"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",value:_,placeholder:"imdbId",className:b()({NewMovie__borderError:""!==Z}),onChange:function(e){U(e.target.value),X("")}})}),Object(d.jsx)("td",{className:"NewMovie__error",children:Z})]})]})]}),Object(d.jsx)("button",{type:"submit",onClick:function(){var e=!0;0===s.length&&(B("Title is Empty"),e=!1),L(p)||(A("Incorrect Url"),e=!1),L(w)||(Y("Incorrect Url"),e=!1),i(_)&&(X("Id exist"),e=!1),e&&(t({title:s,description:m,imgUrl:p,imdbUrl:w,imdbId:_}),l(""),h(""),x(""),M(""),U(""))},children:"Add"})]})}),O=i(8),u=function(){var e=Object(n.useState)(O),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(j,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(h,{onAdd:function(e){c((function(t){return[].concat(Object(s.a)(t),[e])}))},validId:function(e){return i.some((function(t){return t.imdbId===e}))}})})]})};r.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.69a7db30.chunk.js.map