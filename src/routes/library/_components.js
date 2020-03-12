const components = [
  {
    name: 'sample',
    html: `
<div class="{{class}}" id="{{id}}">
  <img src="{{アイコンURL:icon:image=url}}" alt="{{alt:alt:text=アイコン}}">
  <h3>{{見出し:heading:text=見出しです}}</h3>
  <p>{{本文:content:textarea=本文です。}}</p>
</div>

<style>
.{{class}} {
  position: relative;
  z-index: 5;
  height: 100%;
  padding: 1.5rem;
  background-color: {{背景色:background_color:color=#efefef}};
  box-shadow: 2px 2px 0px rgba(0, 0, 0, .25);
}

.{{class}} img {
  display: block;
  width: 60px;
  max-width: 100%;
  margin: 0 auto;
}

.{{class}} h3, .{{class}} p {
  line-height: 1.4;
}

.{{class}} h3 {
  margin-top: 1rem;
  text-align: center;
  font-size: 1.4rem;
}

.{{class}} p {
  margin-top: .5rem;
}

.{{id}} h3, .{{id}} p {
  color: {{文字色:text_color:color=#242424}};
}
</style>
    `
  },
  {
    name: 'stacked-eyecatch',
    html: `
<div class="{{class}}" id="{{id}}">
  <div class="content">
    <h1>{{タイトル:heading:text=ページタイトル}}</h1>
    <p>{{サブタイトル:subheading:text=サブタイトル}}</p>
  </div>
</div>

<style>
.{{class}} {
  position: relative;
  z-index: 5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: {{位置揃え:flex_align:flex-align=center}};
}

#{{id}} h1 {
  text-align: {{テキスト揃え:text_align:text-align=center}};
  color: {{テキストカラー:color:color=#242424}};
  font-size: {{タイトルサイズ:main_size:rem=5}}rem;
}

#{{id}} p {
  text-align: {{テキスト揃え:text_align:text-align=center}};
  color: {{テキストカラー:color:color=#242424}};
  font-size: {{サブタイトルサイズ:sub_size:rem=1.5}}rem;
}
</style>
    `
  },
  {
    name: 'heading',
    html: `
<div class="{{class}}" id="{{id}}">
  <h2>{{タイトル:heading:text=タイトル}}</h2>
  <h3>{{サブタイトル:subheading:text=サブタイトル}}</h3>
</div>

<style>
.{{class}} {
  position: relative;
  z-index: 5;
}

.{{class}} h2 {
  color: #242424;
  text-align: center;
}

.{{class}} h3 {
  color: #242424;
  text-align: center;
  font-weight: 300;
}

#{{id}} h2 {
  color: {{テキストカラー:color:color=#242424}};
  font-size: {{タイトルサイズ:main_size:rem=2.4}}rem;
}

#{{id}} h3 {
  color: {{サブテキストカラー:subcolor:color=#242424}};
  font-size: {{サブタイトルカラー:sub_size:rem=1.4}}rem;
}
</style>
    `
  }
];

export default components;
