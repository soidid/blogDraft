import React from "react";
import Comments from "../Comments/Comments.es6";

import "./Article.css";

//http://community.citizenedu.tw/t/topic/102/10
//http://community.citizenedu.tw/t/topic/767/17
var article = {  
            "id":1872,
            "name":"朱家安",
            "username":"kris",
            "avatar_template":"/user_avatar/community.citizenedu.tw/kris/{size}/18.png",
            "uploaded_avatar_id":18,
            "created_at":"2015-03-16T07:09:39.039Z",
            "cooked":"<h1>作者已死：評論藝術作品，需要看作者臉色嗎？</h1>\n\n<p><div class=\"lightbox-wrapper\"><a data-download-href=\"//community.citizenedu.tw/uploads/default/c5d814ba5c168157eaeb6e142d10c8fa6990df53\" href=\"//community.citizenedu.tw/uploads/default/168/6831502337aa1d27.jpg\" class=\"lightbox\" title=\"沃草烙哲學製圖.004.jpg\"><img src=\"//community.citizenedu.tw/uploads/default/_optimized/5c7/0a8/5996426c96_690x460.jpg\" width=\"690\" height=\"460\"><div class=\"meta\">\n<span class=\"filename\">沃草烙哲學製圖.004.jpg</span><span class=\"informations\">1560x1040 277 KB</span><span class=\"expand\"></span>\n</div></a></div> </p>\n\n<p>試想以下狀況：</p>\n\n<p>評論家針對一本小說寫了評論，認為它隱含強烈的懷疑論思想。然而，小說作者認為該評論的詮釋嚴重扭曲了他原本的創作意圖，並為文反駁。</p>\n\n<p>在文章裡，小說家強調自己根本沒有任何懷疑論的想法，並認為該評論非常不負責任：如果想知道作品背後的創作意圖，為何不打通電話來詢問作者而卻要私自揣測呢？作者還好端端活著，只要一通電話就能得到正確答案呀！就算不打電話，也可以去看他在雜誌以及網路專欄的訪談，早就談過作品真正想表達的內容。</p>\n\n<p>評論家看了作家反駁的文章，不甘示弱也寫了另一篇文回應，在文中他表示，他通常不會去看作家高談闊論自己作品的文章，他只關注作品本身告訴他什麼；如果讀者還得請作者來「指導」他讀懂作品，這不會是文學評論的正途。</p>\n\n<h2>作者意圖與詮釋</h2>\n\n<p>前例改編自筆者身邊的真實故事，事實上這種作家與評論家（或讀者與讀者之間）的爭論相當常見，網路上的電影、小說討論區甚至文學界的研究者都常為了作品的正確詮釋而爭論不休。這種現象不禁讓我們想問：究竟任意詮釋作品是否合理？有所謂的過度詮釋嗎？若有，限制詮釋的條件是什麼？到底有沒有「唯一正確」的詮釋？這一系列問題大抵上就構成了藝術哲學中一個相當棘手的議題：詮釋（interpretation）。</p>\n\n<p>從開頭的例子，我們大概可以看出作家跟評論家兩人爭論的一個重點：</p>\n\n<blockquote><p>作者意圖（authorial intention）&lt;1&gt;與作品意義（work-meaning）之間的關係究竟是什麼？</p></blockquote>\n\n<p>在前例中，作家認為一部作品說了什麼，取決於作者要透過它說什麼；評論家則認為，作品說了什麼，應該僅取決於作品內容。簡單地說：一方認為正確的詮釋是作者說了算，另一方認為是作品說了算。</p>\n\n<h2>意圖謬誤</h2>\n\n<p>在英美分析哲學的歷史中，詮釋理論的爭論始於1946年的一篇論文〈意圖謬誤〉（The Intentional Fallacy）&lt;2&gt;。〈意圖謬誤〉由文學評論家Wimsatt與哲學家Beardsley合著，它在英美藝術哲學界掀起的論戰，迄今尚未停歇。Wimsatt和Beardsley的核心主張很簡單：</p>\n\n<blockquote><p>任何由作者意圖（前提）來推出作品意義（結論）的論證，都犯了「訴諸意圖的謬誤」（以下簡稱「意圖謬誤」）。</p></blockquote>\n\n<p>舉例來說，假設我是一位評論家，讀完了一本小說後打算寫書評，動筆之前我從電視上的作者訪談得知作者在創作這本小說時，打算透過這個故事來體現懷疑論的哲學思想。於是我在評論文章中便以此為基礎，將該本小說詮釋成表達了懷疑論的思想。對於Wimsatt還有Beardsley而言，這樣的詮釋就是意圖謬誤。根據Wimsatt和Beardsley，「訴諸作者的意圖來推出作品意義」的推理，是無效的。</p>\n\n<p>他們首先用一個兩難式來證明，作者意圖與作品詮釋無關（irrelevant）：</p>\n\n<ul>\n<li>（前提一）要嘛作者成功在作品中實現了他的創作意圖，要嘛失敗了。</li>\n<li>（前提二）如果作者成功在作品中實現了他的創作意圖，那麼我們便沒有必要訴諸作者意圖（作品本身就告訴我們作者意圖）。</li>\n<li>（前提三）如果作者沒有成功在作品中實現創作意圖，我們當然也不需要訴諸作者意圖（既然失敗，這個意圖已經跟作品無關了）。</li>\n<li>（結論）不管是哪一種狀況，訴諸作者意圖都是沒有必要的。</li>\n</ul>\n\n<p>舉剛剛的例子，如果作者藉由小說表達懷疑論的哲學思想，並且成功寫出了體現懷疑論的故事，在這種情況下，讀者沒有必要去閱讀作者的訪談或去看作者的facebook來得知該作品背後有懷疑論的思想，因為故事本身就能告訴我們這點。</p>\n\n<p>然而，如果作者的嘗試失敗了，作品無法與懷疑論產生有意義的關聯，那麼就算作者在訪談中說他試圖創作一部懷疑論的小說，我們也不需要去管這個創作意圖，因為實際上寫出來的作品已經跟這個意圖毫無關係了。也就是說，無論如何，要知道作品的意義，我們只需要看作品本身，毋須訴諸作者的意圖來進行詮釋工作，因為文本就告訴我們一切。這種詮釋立場被稱為「反意圖主義」（anti-intentionalism）。你可以猜到，和這種立場相反的，自然就被叫做「意圖主義」（intentionalism）。</p>\n\n<h1>語言慣例與作品意義</h1>\n\n<p>如果我們接受了反意圖主義的兩難論證&lt;3&gt;，不禁要繼續追問「作品自己說了算」或是「文本就告訴我們一切」到底是什麼意思&lt;4&gt;。僅依賴文本來得出作品意義，所依賴的到底是什麼？對反意圖主義而言，我們的詮釋必定依據文本呈現出的一套客觀資料。這些客觀資料其實就是作品中的文字所關涉到的語言慣例（linguistic conventions）。</p>\n\n<p>文學作品由文字組成，文字的意義來自語言慣例，這包含了字典中對字詞成語的定義以及一般大眾的語言使用習慣。若沒有這些語言慣例，大部分的言談都不可能進行，更不用說看懂文學作品了。反意圖主義者認為，語言慣例是詮釋作品時不能違背的客觀資料，詮釋者必須觀察作品所使用文字的語言慣例，透過公共的語言知識來推敲作品意義。</p>\n\n<p>有些人可能會說，透過語言慣例頂多只是知道字詞或語句的表面意思（literal meaning），而難以知道正確的弦外之音，就是因為難以確定作品的隱含意義（implicit meaning），才需要知道作者意圖來破解一些模糊的文意。但反意圖主義者對於語言慣例的理解比這種批評來得廣泛和深刻。</p>\n\n<p>對反意圖主義者來說，語言慣例包括字詞的言外之意（connotation），因為它們也是字詞意義的一部分。例如當我們說「沙漠」就會聯想到「乾渴」，不會聯想到「豐饒」；「獅子」代表「勇猛」而不會是「膽小」；而像成語都有固定指涉的意義，不可濫用。針對較大的語言單位，例如語句，其暗示（suggestion）也都有跡可尋而非任意。如果有人跟你說：「今天的考試超級難！」你就可以推知對方今天參加了考試，而且可能沒有考超高分。這些都預設了語言慣例的理解&lt;5&gt;。</p>\n\n<p>當一個作品中某個段落的意義含糊時，我們通常可以透過掌握相關的語言慣例，全盤細讀作品的上下文來排除不可能的解讀並推理出正確的作品意義。反意圖主義者認為透過這樣的方式，在大部分的狀況下我們可以得到一個唯一正確的作品詮釋&lt;6&gt;。由於主張作品意義是由語言慣例所決定，反意圖主義者又被稱為「慣例主義者」（conventionalist）。</p>\n\n<h2>為什麼反意圖？</h2>\n\n<p>Beardsley進一步提出兩個論證來說明文學評論應該要採取反意圖主義的進路&lt;7&gt;。第一個是關於作者意圖的可得性（availability）。通常讀者們難以獲取關於作者意圖的證據或資料（回想你從以前到現在看過的小說，你了解幾本小說的創作意圖？），更別提許多作者都是年代久遠的古人，想問也問不到。在這種情況下，在裁定詮釋的對錯時，最可靠的證據就是文本。如果我們最後可以從文本中找到證據否決某個解讀，那麼該解讀就是錯的。</p>\n\n<p>第二個論證是關於審美的滿足感（aesthetic satisfaction）。文學詮釋的目標應該是幫助讀者深入了解作品來獲取閱讀的滿足感。例如小說或詩詞的評論文章常常可以替我們指點迷津，讓我們發出「原來這首詩有這層意思！」或是「原來這個故事表達了這個主題！」之類的讚嘆，進而使我們的閱讀經驗更加愉快。既然我們在閱讀及解讀的對象是作品，評論瞄準的應該就是作品本身，而不是外在於作品的作者以及其意圖。</p>\n\n<p>讀到這裡也許有人會說，透過作者意圖來了解作品不也能帶來閱讀的滿足感？當我們更了解作家寫作的嘗試時，常常也能夠讓閱讀體驗更有趣。嚴格說來Beardsley並沒有反對我們在詮釋作品時「參考」作者意圖的資訊，他真正反對的是這些資訊必然地決定了作品意義。參考這些資訊，可以，但我們被這些訊息所啟發的詮釋假設是對是錯，由我們在作品身上觀察到的證據來決定。這些資訊頂多帶給我們詮釋靈感，但不能決定作品意義。如果這些資訊最後證明跟作品無關，那麼就算它能帶來滿足感，也不會是詮釋活動應該要帶來的滿足。</p>\n\n<h2>小結</h2>\n\n<p>反意圖主義的精神在於給予作品自己的生命，而不是讓作品成為作者手下的傀儡。作品就像作者的孩子，出生後就是獨立自存的個體，擁有自己的思想，不受父母控制。父母或許是孩子誕生的原因，但他們沒有辦法代替孩子說話，就如同作者不能代替作品說話。在詮釋活動中，我們該理解、傾聽的不是作者，而是作品。評論者應該把作品從作者的陰影中解放出來&lt;8&gt;。</p>\n\n<h1>Notes</h1>\n\n<ol>\n<li>如何定義「意圖」（intention）也引發了不少的爭議，但可以粗略理解成作者欲在作品中實現的計畫或設計。</li>\n<li>Wimsatt Jr, William and Beardsley, Monroe C. (1946). The Intentional Fallacy. <em>Sewanee Review</em>, 54: 468-88.</li>\n<li>關於反意圖主義的兩難論證該如何「詮釋」有很大的爭議，這個論證真正證明的是訴諸作者意圖是不必要的，但沒有證明作者意圖不能決定作品意義，因為它仍承認了那些成功在作品中實現的意圖。Wimsatt與Beardsley要說的是語言慣例就能充分地（sufficiently）決定作品意義，因此考慮作者意圖是多餘的。但後來Beardsley的立場卻似乎否認作者意圖與作品意義有任何相關性。由於Beardsley是反意圖主義最重要的人物，如上理解也成為一般對意圖謬誤的標準詮釋。針對此點爭議可參閱Lyas, C. (1992). Wittgensteinian Intentions. In G. Iseminger (ed.), <em>Intention &amp; Interpretation</em>. Philadelphia: Temple University Press, 132-151.</li>\n<li>「文本」（text）、「作品」（work）二詞在反意圖主義的脈絡中沒有太深刻的區分，常常混用，這是因為Beardsley將作品等同於文本。但後來的哲學家將二詞做出了嚴格區分。此處不細論。</li>\n<li>Beardsley, M. C. (1981). <em>Aesthetics, Problems in the Philosophy of Criticism</em>. Hackett Publishing.</li>\n<li>若不能，表示文本本身就是模糊的，但反意圖主義者認為這種狀況不多。</li>\n<li>Beardsley, M. C. (1970). <em>The Possibility of Criticism</em>. Detroit: Wayne State University Press.</li>\n<li>本文只是介紹哲學立場，不代表作者立場。</li>\n</ol>\n\n<hr>\n\n<ul>\n<li><p>作者為奧克蘭大學哲學博士候選人、推理小說作家，經營粉絲專頁<a href=\"https://www.facebook.com/pages/%E6%9E%97%E6%96%AF%E8%AB%BA-Lin-Sihyan/147719061920901\">林斯諺</a>。</p></li>\n<li><p>感謝沃草烙哲學社群以及Soong針對本文提供修改建議。</p></li>\n<li><p>公民學院交誼廳：<a href=\"//community.citizenedu.tw/\">http://community.citizenedu.tw/</a></p></li>\n<li><p>沃草公民學院粉絲專頁：<a href=\"https://www.facebook.com/citizenedu\">https://www.facebook.com/citizenedu</a></p></li>\n</ul>",
            "post_number":18,
            "post_type":1,
            "updated_at":"2015-03-19T08:18:36.036Z",
            "reply_count":0,
            "reply_to_post_number":null,
            "quote_count":0,
            "avg_time":24,
            "incoming_link_count":1,
            "reads":14,
            "score":23.8,
            "yours":false,
            "topic_id":767,
            "topic_slug":"topic",
            "topic_auto_close_at":null,
            "display_username":"朱家安",
            "primary_group_name":null,
            "version":4,
            "can_edit":true,
            "can_delete":true,
            "can_recover":true,
            "link_counts":[  
               {  
                  "url":"https://www.facebook.com/citizenedu",
                  "internal":false,
                  "reflection":false,
                  "title":"沃草公民學院 - Watchout Citizenedu | Facebook",
                  "clicks":1
               },
               {  
                  "url":"https://www.facebook.com/pages/%E6%9E%97%E6%96%AF%E8%AB%BA-Lin-Sihyan/147719061920901",
                  "internal":false,
                  "reflection":false,
                  "title":"林斯諺　Lin Sihyan | Facebook",
                  "clicks":1
               },
               {  
                  "url":"http://community.citizenedu.tw/",
                  "internal":true,
                  "reflection":false,
                  "clicks":0
               }
            ],
            "read":true,
            "user_title":null,
            "actions_summary":[  
               {  
                  "id":2,
                  "count":1,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":3,
                  "count":0,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":4,
                  "count":0,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":5,
                  "count":0,
                  "hidden":true,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":6,
                  "count":0,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":7,
                  "count":0,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               },
               {  
                  "id":8,
                  "count":0,
                  "hidden":false,
                  "can_act":true,
                  "can_defer_flags":false
               }
            ],
            "moderator":true,
            "admin":true,
            "staff":true,
            "user_id":4,
            "hidden":false,
            "hidden_reason_id":null,
            "trust_level":4,
            "deleted_at":null,
            "user_deleted":false,
            "edit_reason":"",
            "can_view_edit_history":true,
            "wiki":false
};


export default React.createClass({
  displayName: "Article",
  
  render() {
    var data = article;
    var size = 120;//size=45,120
    var imgURL = "http://community.citizenedu.tw"+"/user_avatar/community.citizenedu.tw/kris/"+size+"/18.png";
    //var imgURL = "./images/avatar.jpg";

    return (
      <div className="Article">
         <div dangerouslySetInnerHTML={{__html: data.cooked}}></div>
         <div className="Article-author">
            <img className="Article-avatar"
                 src={imgURL} />
            <div className="Article-info">
               <div className="Article-name">{data.name}</div> 
               <div className="Article-date">發表於 {data.created_at.split('T')[0]}</div>
            </div>
         </div>
         <Comments />
      </div>
    );
  }
});