const components = [
  {
    name: 'sample',
    html: `
<div class="{{class}}" id="{{id}}">
  <h1>{{見出し:heading:text=見出し}}</h1>
</div>

<style>
.{{class}} {
  position: relative;
  z-index: 5;
}

.{{class}} h1 {
  color: #242424;
  text-align: center;
}

#{{id}} h1 {
  color: {{タイトルカラー:color:color=#242424}};
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
}

#{{id}} h2 {
  color: {{テキストカラー:color:color=#242424}};
}

#{{id}} h3 {
  color: {{サブテキストカラー:subcolor:color=#242424}};
}
</style>
    `
  }
];

export default components;
