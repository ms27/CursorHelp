CursorHelp
===========
<p>---------------------------------------------------------------------------------------</p>
<h1>Demo:</h1>
<h3><a href="http://ms27.github.io/CursorHelp/">Demo page / Демо страница</a></h3>
<p>---------------------------------------------------------------------------------------</p>
<h2>Description / Описание</h2>
<ul>
  <li>
    <h5>(En)</h5>
      Beautiful title on Jquery, Css and Html. This title is always visible on screen side, even if tag is located at the edge of the browser window. It is a beautiful replacement of the usual html title. It is also possible to format the appearance of each tooltip. (Google translator)
  </li>
  <li>
    <h4>(Ru)</h4>
      Оригинальный Title при наведении появляется рядом с курсором, красивая замена обычного title. Преимуществом является то, что подсказка видна при любых обстоятельствах. А также имеется возможность форматировать внешний вид каждой подсказки в html коде, сделать это можно используя уже готовые стили (решения) или добавив свои.
      Скрипт написал сам, не откуда не брал готовые решения, только использовал возможности языка javascript (Jquery). Стили написаны на языке CSS.
  </li>
</ul>
<p>---------------------------------------------------------------------------------------</p>
<h2>Как использовать</h2>
<ol>
<li>скачиваете файлы</li>
<li>закружаете их на свой сервер(хостинг)</li>
<li>подключаете на каждой странице</li>
<li>
<ul>
<li>
если Вы скачали версию 1.0, то вставте следующий код перед закрывающимся тегом &lt;/body&gt; (где именно - не важно, главное, чтобы где-нибудь внизу и на всех страницах):<br>
<code>
<p>&lt;div id="cursorTitle"&gt;</p>
<p>&lt;div class="TitleContent"&gt;&lt;/div&gt;</p>
<p>&lt;div class="TitleCorner true"&gt;&lt;/div&gt;</p>
<p>&lt;/div&gt;</p>
</code>
</li>
<li>Если у вас следующая версия, то делать этого не надо, достаточно подключить скрипт к страницам.</li>
</ul>
</li>
<li>
Тем блокам, которые нуждаются в подсказках, добавте класс 'cursorTitle':<br>
<p>...</p>
<code>&lt;div class="cursorTitle"&gt;&lt;/div&gt;</code><br>
или<br>
<code>&lt;p class="cursorTitle"&gt;&lt;/p&gt;</code><br>
или<br>
<code>&lt;p&gt;Это текст с &lt;span class="cursorTitle"&gt;подсказкой&lt;/span&gt;&lt;/p&gt;</code>
<p>...</p>
<p>Теперь, элементы с таким классом имеют подсказочное окошко, но самой подсказки пока ещё нет.</p>
</li>
<li>Чтобы добавить содержание подсказке, нужно помимо класса 'cursorTitle' добавить атрибут 'data-title' и дать ему значение с текстом помощи, перевода (как на демо странице), проще говоря, того, чего пожелаете.<br>
<code>&lt;div class="cursorTitle" data-title="текст подсказки"&gt;&lt;/div&gt;</code><br>
или<br>
<code>&lt;p class="cursorTitle" data-title="текст подсказки"&gt;&lt;/p&gt;</code><br>
или<br>
<code>&lt;p&gt;Это текст с &lt;span class="cursorTitle" data-title="текст подсказки"&gt;подсказкой&lt;/span&gt;&lt;/p&gt;</code>
<p>...</p>
<p>Всё!.. Окошко с подсказкой есть, текст тоже..</p>
</li>
<li>А, нет... Это ещё не всё.. Забыл про внешний вид сообщений. Но это не обязательно, поэтому, если хотите узнать, как настроить дизай, то смотрите следующий раздел.</li>
</ol>
<p>Спасибо за внимание!</p>
<p>---------------------------------------------------------------------------------------</p>
<h2>Настройка внешнего вида:</h2>
<p>Для настройки дизайна подсказок Вы можете использовать как свои классы, так и уже готовые (они хранятся в файле 'cursorhelp.css').</p>
<h5>Как применять:</h5>
<ul>
<li>Для начала создадим элемент с CursorHelp помощью (в примере это тег 'span'):
<p>...</p>
<code>&lt;p&gt;просто текст, &lt;span class="cursorTitle" data-title="это сама подсказка"&gt;текст с подсказкой&lt;/span&gt;&lt;/p&gt;</code>
<p>...</p>
</li>
<li>Я уже упоминул, что для стилизации будут использоваться классы, отличие заключается в том, что эти классы нужно обарачивать не в атрибут 'class', а в атрибут 'data-ch-config'. Поэтому добавим его:
<p>...</p>
<code>&lt;p&gt;просто текст, &lt;span class="cursorTitle" data-title="это сама подсказка" data-title=""&gt;текст с подсказкой&lt;/span&gt;&lt;/p&gt;</code>
<p>...</p>
</li>
<li>Теперь нужно лишь дать значение этому атрибуту. Я уже заготовил основные классы, используя которые вы можете изменить у подсказки: цвет фона, цвет текста, добавить тень тексту и блоку, изменить шрифт, прозрачность и закруглить углы у блока. Таблицу с этими классами Вы можете просмотреть ниже. Но я думаю, что вам будет удобнее использовать свои стили, а значит свои классы, тем более, что таким образом можно стилизовать все подсказки под свой дизайн, написав всего один класс и указав его во всех элементах помощи в атрибуте data-title. Если подсказки будут одного стиля, то предлагаю поступить проще и изменить деволтный дизайн в файле 'cursorhelp.css'.
<h5>Возможно использование нескольких классов для одной подсказки, просто указывайте их через пробел.</h5>
<p>Примеры:</p>
<p>...</p>
<code>&lt;p class="cursorTitle" data-title="это текст подсказки"&gt;будет стандартный вид&lt;/p&gt;</code><br>
<code>&lt;p class="cursorTitle" data-title="это текст подсказки" data-ch-config="bgc-green fs-25 c-white bs-b ts-b opacity-08 br-20"&gt;будет настроенный вид, используются прилагающиеся классы&lt;/p&gt;</code><br>
<code>&lt;p class="cursorTitle" data-title="это текст подсказки" data-ch-config="yourClass"&gt;будет настроенный вид, используются ваш класс, только не забудте прописать его в CSS.&lt;/p&gt;</code><br>
<code>&lt;p class="cursorTitle" data-title="это текст подсказки" data-ch-config="yourClass yourClass2"&gt;будет настроенный вид, используются ваши классы, только не забудте прописать их в CSS.&lt;/p&gt;</code>
<p>...</p>
</li>
</ul>
<p>---------------------------------------------------------------------------------------</p>
<h2>Contact / Обратная связь</h2>
  Cвязаться с автором: аккаутн в [Google+](https://plus.google.com/114595254514911414836), страница на [FaceBook](https://www.facebook.com/SidMag27).
<p>---------------------------------------------------------------------------------------</p>
