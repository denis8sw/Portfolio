const theEnglish = document.getElementById("theenglish")
const theGerman = document.getElementById("thegerman")


const projC1 = document.getElementById("projc1")
const projC2 = document.getElementById("projc2")
const projC3 = document.getElementById("projc3")
const projC4 = document.getElementById("projc4")
const projC5 = document.getElementById("projc5")
const projC6 = document.getElementById("projc6")
const projC7 = document.getElementById("projc7")
const projC8 = document.getElementById("projc8")
const projC9 = document.getElementById("projc9")
const projC10 = document.getElementById("projc10")

const projB1 = document.getElementById("projb1")
const projB2 = document.getElementById("projb2")
const projB3 = document.getElementById("projb3")
const projB4 = document.getElementById("projb4")
const projB5 = document.getElementById("projb5")
const projB6 = document.getElementById("projb6")
const projB7 = document.getElementById("projb7")

const projT1 = document.getElementById("projt1")
const projT2 = document.getElementById("projt2")
const projT3 = document.getElementById("projt3")
const projT4 = document.getElementById("projt4")
const projT5 = document.getElementById("projt5")
const projT6 = document.getElementById("projt6")


const languages = ["english", "german"]
let language;




theEnglish.addEventListener("click", function () {
    language = languages[0]

    localStorage.setItem("language1", "english");
    localStorage.removeItem("language2", "german");

    projC1.innerText = "It all started when I was 8, I got my first laptop and I was very excited. At first I used the laptop mostly for gaming, mainly minecraft."
    projC2.innerText = "And minecraft, when I started my cyber security, there was one server that was very popular and it was also in my native language, it was called PvPBulgaria."
    projC3.innerText = "There was a lot of cheating, once me and my friend were talking on skype and my friend clicked on a link in minecraft private chat.\n\nHis internet suddenly stopped, he came back online after 5 minutes and this is how I learned about ddosing and how I can protect myself from it."
    projC4.innerText = "That's pretty much how I learned how I can ddos ​​someone, what I need, what tools I need to use, the attack methods and of course how I need to protect myself with a vpn and some firewall settings.\n\nNow that I know how to attack someone or something, I also need to learn how to defend it, I started hosting minecraft servers and the first thing that came to my mind was, how do I publish the server online?"
    projC5.innerText = "I saw videos that people host it on their own computers, but it's very dangerous and you have to modify your router, so I said no, and then I found this ngrok tool, which wasn't very popular at the time, and I published the server with it!"
    projC6.innerText = "Now I realized I have to keep the computer on so that means I still host the server on my computer and I didn't want to pay for a host so that why I gave up but I still had a lot of experience with minecraft servers like plugins etc.\n\nI even ran a kinda successful minecraft server back in the day, about 30/40 people playing a day. But I had to shut down my computer every night.\n\nSo, how I said I gave up, but I gained so much experience about hosting and creating protections.\n\nAlright so everything seemed normal.In 2017 when they released fortnite i really wanted a gaming pc so i could play it."
    projC7.innerText = "And finally after a few months I got a gaming PC! I remember it was season 5 and I was playing all day.\n\nSo one day I searched on youtube how can I get free fortnite skins and back in the days youtube didn't really protect the videos for cracking or any illegal stuff like in 2022/2023.\n\nI watched the tutorial it was pretty simple just public combo leech and epic games account checker I followed the tutorial and just cracked my first account even remembered it had 2 skins!"
    projC8.innerText = "If you're wondering why I'm telling you what illegal things I did, firstly I was very young, 13, and secondly, there's no actual proof maybe im just lying.\n\nAnyway I started looking for private methods and found one very HQ method, there was one leecher named smart pastebin leecher, I know what you think leechers are public but this one wasn't!\n\nI started getting so many hits, I had so many accounts I went crazy, I even started selling at school.\n\nThen I was like lets check the accounts for other hits like minecraft,steam,origin and so on .. I found a lot of interesting multi checkers, not only but also brute force ones."
    projC9.innerText = "I got very addicted, I started learning how to do hq combos using sqli, I'll keep that part a secret, anyway after that I started learning about hq proxies, but I realized I either have to buy them or find them very nice method where i can scrape them from the website so it was quite unsuccessful.\n\nWell, enough about the cracking part, I have gained a lot of experience, not only how hackers can crack your password, but also how you can protect yourself, I also didn't mention the checkers and apis..\n\nSo of course over the years I got a lot of viruses from the tools I used, so I learned about vms, vps, sandboxie, etc. I learned how I can remove malwares, backdoors, rats, etc."
    projC10.innerText = "Overall I learned so much, of course this is just a short story of how it all started, I didn't include much."

    projB1.innerText = "It all started with basic html when I was about 10/11 years old."
    projB2.innerText = "Honestly I couldn't do anything myself so I just copied code from youtube and was very proud lol and always coded in notepad.\n\nI didn't know what ide was or even css, I just used notepad and plain html.\n\nSo if you've read my cyber security journey you know I've been hacking accounts so one day I decided to start a Discord group and website and I did."
    projB3.innerText = "It was actually quite successful, I was doing giveaways, I even had an account generator, but the website was very bad, how did I say I only knew pure html so it was trash.\n\nI later removed the discord group and gave up making websites because it was too hard.\n\nYears later a friend of mine said I was some kind of hacker because I was able to build websites and that gave me motivation so I started again!"
    projB4.innerText = "This time I learned about css and started creating html/css projects oh and this time I used actual ide - visual studio code.\n\nEverything was great until I realized that I needed to manage my website to look good on every screen too. It was very difficult and I gave up again..\n\nA year later I came back, learned a lot of properties in css, learned how to position things, learned about containers and learned how to make responsive websites!"
    projB5.innerText = "I have created several websites but then something was missing? Yes Java Script.\n\nActually the java script was very easy to learn so it was a success, now that I know html, css and the front end java script it was time to learn the back end."
    projB6.innerText = "I really struggled with learning the back end but finally after a few months I did that too, learned how to communicate with servers/apis, learned how to host ones and of course node js!"
    projB7.innerText = "I'm a full stack developer now and I'm only 17 so I still have a lot to learn, of course this isn't the full story of my coding journey, maybe I'll update it and include my java and c++ coding journey too."

    projT1.innerText = "I will only include one of my major projects here, if you are curious about my entire project journey, contact me here.\n\nWe are starting with Impbase."
    projT2.innerText = "Impbase was a powerful leak application, it could get any leaked information from discord groups, chats, dark engines, normal engines ... pretty much anything, the project was shut down due to illegal terms.\n\nMy second project Thenix."
    projT3.innerText = "Well coding isn't just my main thing I'm 17 and 88kg calisthenics athlete you can see me on instagram anyway the website was about affiliate marketing and my paid training plans.\n\nMy next project The River."
    projT4.innerText = "A simple private room to chat with strangers, the chat app is recreated from the movie Unfriended.\n\nMy fourth project FastKeyWriter."
    projT5.innerText = "I was inspired by the 10fastfingers website and just recreated my own version. The project is unfinished, so I will work on it in the future, you can still visit it.\n\nMy fifth project My Old Portfolio."
    projT6.innerText = "It wasn't good so I updated it, you can still visit my old one.\n\nOf course, I have more projects, but I don't want to put them here yet, I will work more."


})


theGerman.addEventListener("click", function () {
    language = languages[1]

    localStorage.setItem("language2", "german");
    localStorage.removeItem("language1", "english");

    projC1.innerText = "Alles begann, als ich 8 war, ich bekam meinen ersten Laptop und war sehr aufgeregt. Anfangs habe ich den Laptop hauptsächlich zum Spielen genutzt, hauptsächlich für Minecraft."
    projC2.innerText = "Und Minecraft, als ich mit der Cybersicherheit begann, gab es einen Server, der sehr beliebt war und auch in meiner Muttersprache verfügbar war, er hieß PvPBulgaria."
    projC3.innerText = "Es wurde viel geschummelt, einmal haben ich und mein Freund über Skype gesprochen und mein Freund hat geklickt über einen Link im privaten Minecraft-Chat.\n\nSein Internet hörte plötzlich auf, er kam nach 5 Minuten wieder online und so erfuhr ich etwas über Ddosing und wie ich mich davor schützen kann."
    projC4.innerText = "So habe ich im Großen und Ganzen gelernt, wie ich jemandem DDos machen kann, was ich brauche, welche Tools ich verwenden muss, das Angriffsmethoden und natürlich, wie ich mich mit einem VPN und einigen Firewall-Einstellungen schützen muss.\n\nJetzt, da ich weiß, wie man jemanden oder etwas angreift, muss ich auch lernen, es zu verteidigen. Ich habe angefangen, Minecraft-Server zu hosten, und das erste, was mir in den Sinn kam, war: Wie veröffentliche ich das? Server online?"

    projC5.innerText = "Ich habe Videos gesehen, in denen Leute es auf ihren eigenen Computern hosten, aber es ist sehr gefährlich und man muss seinen Router modifizieren, also habe ich nein gesagt, und dann habe ich dieses Ngrok-Tool gefunden, das damals nicht sehr beliebt war, und es veröffentlicht der Server mit dabei!"
    projC6.innerText = "Jetzt wurde mir klar, dass ich den Computer eingeschaltet lassen muss, was bedeutet, dass ich den Server immer noch auf meinem Computer hoste und nicht für einen Host bezahlen wollte. Deshalb habe ich aufgegeben, aber ich hatte immer noch viel Erfahrung mit Minecraft-Servern wie z Plugins usw.\n\nIch habe damals sogar einen einigermaßen erfolgreichen Minecraft-Server betrieben, auf dem etwa 30/40 Leute einen spielten Tag. Aber ich musste jeden Abend meinen Computer herunterfahren.\n\nWie gesagt, ich habe aufgegeben, aber ich habe so viel Erfahrung mit dem Hosten und Erstellen von Schutzmaßnahmen gesammelt.\n\nOkay, also schien alles normal zu sein. Als sie 2017 Fortnite veröffentlichten, wollte ich unbedingt einen Gaming-PC, damit ich es spielen konnte."
    projC7.innerText = "Und nach ein paar Monaten habe ich endlich einen Gaming-PC bekommen! Ich erinnere mich, dass es Staffel 5 war und ich den ganzen Tag gespielt habe.\n\nAlso habe ich eines Tages auf YouTube gesucht, wie ich kostenlose Fortnite-Skins bekommen kann, und damals hat YouTube die Videos nicht wirklich vor Cracking oder anderen illegalen Dingen geschützt, wie im Jahr 2022/2023.\n\nIch habe mir das Tutorial angesehen, es war ziemlich einfach, nur Public Combo Leech und Epic Games Account Checker. Ich bin dem Tutorial gefolgt und habe gerade mein erstes Konto geknackt. Ich habe mich sogar daran erinnert, dass es zwei Skins hatte!"
    projC8.innerText = "Wenn Sie sich fragen, warum ich Ihnen erzähle, welche illegalen Dinge ich getan habe: Erstens war ich sehr jung, 13, und zweitens gibt es keinen wirklichen Beweis, vielleicht lüge ich nur.\n\nWie auch immer, ich fing an, nach privaten Methoden zu suchen und fand eine sehr hochwertige Methode, es gab einen Blutegel namens Smart Pastebin Leecher. Ich weiß, was Sie denken, Blutegel sind öffentlich, aber dieser war es nicht!\n\nIch bekam so viele Zugriffe, ich hatte so viele Accounts, dass ich verrückt wurde und sogar anfing, bei zu verkaufen Schule.\n\nDann dachte ich, lasst uns die Konten auf andere Hits wie Minecraft, Steam, Origin usw. überprüfen. Ich habe viele interessante Multi-Checker gefunden, nicht nur, sondern auch Brute-Force-Checker."
    projC9.innerText = "Ich wurde sehr süchtig, ich fing an zu lernen, wie man HQ-Combos mit SQLI macht, ich werde diesen Teil geheim halten, jedenfalls habe ich danach angefangen, etwas über HQ-Proxys zu lernen, aber mir wurde klar, dass ich sie entweder kaufen oder finden muss Sie sind eine sehr nette Methode, mit der ich sie von der Website entfernen kann, also war es ziemlich erfolglos.\n\nNun, genug zum Cracking-Teil, ich habe viel Erfahrung gesammelt, nicht nur, wie Hacker Ihr Passwort knacken können, sondern auch, wie Sie sich schützen können, ich habe auch die Checker und APIs nicht erwähnt.\n\nNatürlich habe ich mir im Laufe der Jahre viele Viren durch die von mir verwendeten Tools eingefangen, sodass ich etwas über VMS, VPS, Sandboxie usw. gelernt habe. Ich habe gelernt, wie ich Malware, Hintertüren, Ratten usw. entfernen kann."
    projC10.innerText = "Insgesamt habe ich so viel gelernt, natürlich ist dies nur eine kurze Geschichte darüber, wie alles begann, ich habe sie nicht erwähntviel."

    projB1.innerText = "Alles begann mit einfachem HTML, als ich etwa 10/11 Jahre alt war."
    projB2.innerText = "Ehrlich gesagt konnte ich selbst nichts tun, also habe ich einfach den Code von YouTube kopiert und war sehr stolz, lol, und habe immer im Notizblock codiert.\n\n Ich wusste nicht, was ide oder CSS ist, ich habe nur Notepad und einfaches HTML verwendet. \n\n Wenn Sie also meine Reise zur Cybersicherheit gelesen haben, wissen Sie, dass ich Konten gehackt habe, also beschloss ich eines Tages, eine Discord-Gruppe und eine Discord-Website zu gründen, und das tat ich auch."
    projB3.innerText = "It was actually quite successful, I was doing giveaways, I even had an account generator, but the website was very bad, how did I say I only knew pure html so it was trash.\n\n Später habe ich die Discord-Gruppe gelöscht und das Erstellen von Websites aufgegeben, weil es zu schwierig war.\n\nJahre später sagte ein Freund, ich sei eine Art Hacker, weil ich Websites erstellen konnte, und das motivierte mich, also fing ich noch einmal an!"
    projB4.innerText = "Dieses Mal habe ich etwas über CSS gelernt und angefangen, HTML/CSS-Projekte zu erstellen, und dieses Mal habe ich tatsächliche Idee verwendet – Visual Studio-Code.\n\nAlles war großartig, bis mir klar wurde, dass ich meine Website so verwalten musste, dass sie auch auf jedem Bildschirm gut aussieht. Es war sehr schwierig und ich habe wieder aufgegeben.\n\nEin Jahr später kam ich zurück, lernte viele Eigenschaften in CSS und lernte, wie man Dinge positioniert.Ich habe etwas über Container gelernt und gelernt, wie man reaktionsfähige Websites erstellt!"
    projB5.innerText = "Ich habe mehrere Websites erstellt, aber dann hat etwas gefehlt? Ja Java Script.\n\nEigentlich war das Java-Skript sehr einfach zu erlernen, also war es ein Erfolg. Jetzt, da ich HTML, CSS und das Front-End-Java-Skript kenne, war es an der Zeit, das Backend zu lernen."
    projB6.innerText = "Ich hatte wirklich Mühe, das Backend zu erlernen, aber nach ein paar Monaten habe ich es schließlich auch geschafft, gelernt, wie man mit Servern/APIs kommuniziert, wie man diese hostet und natürlich Node Js!"
    projB7.innerText = "Ich bin jetzt ein Full-Stack-Entwickler und erst 17 Jahre alt, also muss ich noch viel lernen. Natürlich ist dies nicht die ganze Geschichte meiner Codierungsreise, vielleicht aktualisiere ich sie und füge meine Java- und C++-Codierung hinzu Reise auch."



    projT1.innerText = "Ich werde hier nur eines meiner Hauptprojekte vorstellen, wenn Sie neugierig auf meine gesamte Projektreise sind, Kontaktieren Sie mich hier.\n\n Wir beginnen mit Impbase."
    projT2.innerText = "Impbase war eine leistungsstarke Leak-Anwendung, die alle durchgesickerten Informationen von Discord-Gruppen, Chats, Dark Engines, normalen Engines usw. abrufen konnte. Das Projekt wurde aufgrund illegaler Bedingungen eingestellt. \n\n Mein zweites Projekt Thenix."
    projT3.innerText = "Naja, Programmieren ist nicht nur meine Hauptbeschäftigung, ich bin 17 und 88 kg Calisthenics-Athletin. Du kannst mich jedenfalls auf Instagram sehen, auf der Website ging es um Affiliate-Marketing und meine bezahlten Trainingspläne.\n\n Mein nächstes Projekt The River. "
    projT4.innerText = "Die Chat-App ist ein einfacher privater Raum zum Chatten mit Fremden und wurde dem Film „Unfriended“ nachempfunden. \n\n Mein viertes Projekt FastKeyWriter."
    projT5.innerText = "Ich habe mich von der 10fastfingers-Website inspirieren lassen und einfach meine eigene Version neu erstellt. Das Projekt ist noch nicht abgeschlossen, daher werde ich in Zukunft daran arbeiten, Sie können es trotzdem besichtigen. \n\n Mein fünftes Projekt ist mein altes Portfolio."
    projT6.innerText = "Es war nicht gut, also habe ich es aktualisiert. Sie können mein altes immer noch besuchen. \n\n Natürlich habe ich noch weitere Projekte, aber ich möchte sie noch nicht hier veröffentlichen, ich werde mehr arbeiten."



})



if (localStorage.getItem("language2", "german")) {
    projC1.innerText = "Alles begann, als ich 8 war, ich bekam meinen ersten Laptop und war sehr aufgeregt. Anfangs habe ich den Laptop hauptsächlich zum Spielen genutzt, hauptsächlich für Minecraft."
    projC2.innerText = "Und Minecraft, als ich mit der Cybersicherheit begann, gab es einen Server, der sehr beliebt war und auch in meiner Muttersprache verfügbar war, er hieß PvPBulgaria."
    projC3.innerText = "Es wurde viel geschummelt, einmal haben ich und mein Freund über Skype gesprochen und mein Freund hat geklickt über einen Link im privaten Minecraft-Chat.\n\nSein Internet hörte plötzlich auf, er kam nach 5 Minuten wieder online und so erfuhr ich etwas über Ddosing und wie ich mich davor schützen kann."
    projC4.innerText = "So habe ich im Großen und Ganzen gelernt, wie ich jemandem DDos machen kann, was ich brauche, welche Tools ich verwenden muss, das Angriffsmethoden und natürlich, wie ich mich mit einem VPN und einigen Firewall-Einstellungen schützen muss.\n\nJetzt, da ich weiß, wie man jemanden oder etwas angreift, muss ich auch lernen, es zu verteidigen. Ich habe angefangen, Minecraft-Server zu hosten, und das erste, was mir in den Sinn kam, war: Wie veröffentliche ich das? Server online?"

    projC5.innerText = "Ich habe Videos gesehen, in denen Leute es auf ihren eigenen Computern hosten, aber es ist sehr gefährlich und man muss seinen Router modifizieren, also habe ich nein gesagt, und dann habe ich dieses Ngrok-Tool gefunden, das damals nicht sehr beliebt war, und es veröffentlicht der Server mit dabei!"
    projC6.innerText = "Jetzt wurde mir klar, dass ich den Computer eingeschaltet lassen muss, was bedeutet, dass ich den Server immer noch auf meinem Computer hoste und nicht für einen Host bezahlen wollte. Deshalb habe ich aufgegeben, aber ich hatte immer noch viel Erfahrung mit Minecraft-Servern wie z Plugins usw.\n\nIch habe damals sogar einen einigermaßen erfolgreichen Minecraft-Server betrieben, auf dem etwa 30/40 Leute einen spielten Tag. Aber ich musste jeden Abend meinen Computer herunterfahren.\n\nWie gesagt, ich habe aufgegeben, aber ich habe so viel Erfahrung mit dem Hosten und Erstellen von Schutzmaßnahmen gesammelt.\n\nOkay, also schien alles normal zu sein. Als sie 2017 Fortnite veröffentlichten, wollte ich unbedingt einen Gaming-PC, damit ich es spielen konnte."
    projC7.innerText = "Und nach ein paar Monaten habe ich endlich einen Gaming-PC bekommen! Ich erinnere mich, dass es Staffel 5 war und ich den ganzen Tag gespielt habe.\n\nAlso habe ich eines Tages auf YouTube gesucht, wie ich kostenlose Fortnite-Skins bekommen kann, und damals hat YouTube die Videos nicht wirklich vor Cracking oder anderen illegalen Dingen geschützt, wie im Jahr 2022/2023.\n\nIch habe mir das Tutorial angesehen, es war ziemlich einfach, nur Public Combo Leech und Epic Games Account Checker. Ich bin dem Tutorial gefolgt und habe gerade mein erstes Konto geknackt. Ich habe mich sogar daran erinnert, dass es zwei Skins hatte!"
    projC8.innerText = "Wenn Sie sich fragen, warum ich Ihnen erzähle, welche illegalen Dinge ich getan habe: Erstens war ich sehr jung, 13, und zweitens gibt es keinen wirklichen Beweis, vielleicht lüge ich nur.\n\nWie auch immer, ich fing an, nach privaten Methoden zu suchen und fand eine sehr hochwertige Methode, es gab einen Blutegel namens Smart Pastebin Leecher. Ich weiß, was Sie denken, Blutegel sind öffentlich, aber dieser war es nicht!\n\nIch bekam so viele Zugriffe, ich hatte so viele Accounts, dass ich verrückt wurde und sogar anfing, bei zu verkaufen Schule.\n\nDann dachte ich, lasst uns die Konten auf andere Hits wie Minecraft, Steam, Origin usw. überprüfen. Ich habe viele interessante Multi-Checker gefunden, nicht nur, sondern auch Brute-Force-Checker."
    projC9.innerText = "Ich wurde sehr süchtig, ich fing an zu lernen, wie man HQ-Combos mit SQLI macht, ich werde diesen Teil geheim halten, jedenfalls habe ich danach angefangen, etwas über HQ-Proxys zu lernen, aber mir wurde klar, dass ich sie entweder kaufen oder finden muss Sie sind eine sehr nette Methode, mit der ich sie von der Website entfernen kann, also war es ziemlich erfolglos.\n\nNun, genug zum Cracking-Teil, ich habe viel Erfahrung gesammelt, nicht nur, wie Hacker Ihr Passwort knacken können, sondern auch, wie Sie sich schützen können, ich habe auch die Checker und APIs nicht erwähnt.\n\nNatürlich habe ich mir im Laufe der Jahre viele Viren durch die von mir verwendeten Tools eingefangen, sodass ich etwas über VMS, VPS, Sandboxie usw. gelernt habe. Ich habe gelernt, wie ich Malware, Hintertüren, Ratten usw. entfernen kann."
    projC10.innerText = "Insgesamt habe ich so viel gelernt, natürlich ist dies nur eine kurze Geschichte darüber, wie alles begann, ich habe sie nicht erwähntviel."

    projB1.innerText = "Alles begann mit einfachem HTML, als ich etwa 10/11 Jahre alt war."
    projB2.innerText = "Ehrlich gesagt konnte ich selbst nichts tun, also habe ich einfach den Code von YouTube kopiert und war sehr stolz, lol, und habe immer im Notizblock codiert.\n\n Ich wusste nicht, was ide oder CSS ist, ich habe nur Notepad und einfaches HTML verwendet. \n\n Wenn Sie also meine Reise zur Cybersicherheit gelesen haben, wissen Sie, dass ich Konten gehackt habe, also beschloss ich eines Tages, eine Discord-Gruppe und eine Discord-Website zu gründen, und das tat ich auch."
    projB3.innerText = "It was actually quite successful, I was doing giveaways, I even had an account generator, but the website was very bad, how did I say I only knew pure html so it was trash.\n\n Später habe ich die Discord-Gruppe gelöscht und das Erstellen von Websites aufgegeben, weil es zu schwierig war.\n\nJahre später sagte ein Freund, ich sei eine Art Hacker, weil ich Websites erstellen konnte, und das motivierte mich, also fing ich noch einmal an!"
    projB4.innerText = "Dieses Mal habe ich etwas über CSS gelernt und angefangen, HTML/CSS-Projekte zu erstellen, und dieses Mal habe ich tatsächliche Idee verwendet – Visual Studio-Code.\n\nAlles war großartig, bis mir klar wurde, dass ich meine Website so verwalten musste, dass sie auch auf jedem Bildschirm gut aussieht. Es war sehr schwierig und ich habe wieder aufgegeben.\n\nEin Jahr später kam ich zurück, lernte viele Eigenschaften in CSS und lernte, wie man Dinge positioniert.Ich habe etwas über Container gelernt und gelernt, wie man reaktionsfähige Websites erstellt!"
    projB5.innerText = "Ich habe mehrere Websites erstellt, aber dann hat etwas gefehlt? Ja Java Script.\n\nEigentlich war das Java-Skript sehr einfach zu erlernen, also war es ein Erfolg. Jetzt, da ich HTML, CSS und das Front-End-Java-Skript kenne, war es an der Zeit, das Backend zu lernen."
    projB6.innerText = "Ich hatte wirklich Mühe, das Backend zu erlernen, aber nach ein paar Monaten habe ich es schließlich auch geschafft, gelernt, wie man mit Servern/APIs kommuniziert, wie man diese hostet und natürlich Node Js!"
    projB7.innerText = "Ich bin jetzt ein Full-Stack-Entwickler und erst 17 Jahre alt, also muss ich noch viel lernen. Natürlich ist dies nicht die ganze Geschichte meiner Codierungsreise, vielleicht aktualisiere ich sie und füge meine Java- und C++-Codierung hinzu Reise auch."



    projT1.innerText = "Ich werde hier nur eines meiner Hauptprojekte vorstellen, wenn Sie neugierig auf meine gesamte Projektreise sind, Kontaktieren Sie mich hier.\n\n Wir beginnen mit Impbase."
    projT2.innerText = "Impbase war eine leistungsstarke Leak-Anwendung, die alle durchgesickerten Informationen von Discord-Gruppen, Chats, Dark Engines, normalen Engines usw. abrufen konnte. Das Projekt wurde aufgrund illegaler Bedingungen eingestellt. \n\n Mein zweites Projekt Thenix."
    projT3.innerText = "Naja, Programmieren ist nicht nur meine Hauptbeschäftigung, ich bin 17 und 88 kg Calisthenics-Athletin. Du kannst mich jedenfalls auf Instagram sehen, auf der Website ging es um Affiliate-Marketing und meine bezahlten Trainingspläne.\n\n Mein nächstes Projekt The River. "
    projT4.innerText = "Die Chat-App ist ein einfacher privater Raum zum Chatten mit Fremden und wurde dem Film „Unfriended“ nachempfunden. \n\n Mein viertes Projekt FastKeyWriter."
    projT5.innerText = "Ich habe mich von der 10fastfingers-Website inspirieren lassen und einfach meine eigene Version neu erstellt. Das Projekt ist noch nicht abgeschlossen, daher werde ich in Zukunft daran arbeiten, Sie können es trotzdem besichtigen. \n\n Mein fünftes Projekt ist mein altes Portfolio."
    projT6.innerText = "Es war nicht gut, also habe ich es aktualisiert. Sie können mein altes immer noch besuchen. \n\n Natürlich habe ich noch weitere Projekte, aber ich möchte sie noch nicht hier veröffentlichen, ich werde mehr arbeiten."

} else if((localStorage.getItem("language1", "english"))) {
    projC1.innerText = "It all started when I was 8, I got my first laptop and I was very excited. At first I used the laptop mostly for gaming, mainly minecraft."
    projC2.innerText = "And minecraft, when I started my cyber security, there was one server that was very popular and it was also in my native language, it was called PvPBulgaria."
    projC3.innerText = "There was a lot of cheating, once me and my friend were talking on skype and my friend clicked on a link in minecraft private chat.\n\nHis internet suddenly stopped, he came back online after 5 minutes and this is how I learned about ddosing and how I can protect myself from it."
    projC4.innerText = "That's pretty much how I learned how I can ddos ​​someone, what I need, what tools I need to use, the attack methods and of course how I need to protect myself with a vpn and some firewall settings.\n\nNow that I know how to attack someone or something, I also need to learn how to defend it, I started hosting minecraft servers and the first thing that came to my mind was, how do I publish the server online?"
    projC5.innerText = "I saw videos that people host it on their own computers, but it's very dangerous and you have to modify your router, so I said no, and then I found this ngrok tool, which wasn't very popular at the time, and I published the server with it!"
    projC6.innerText = "Now I realized I have to keep the computer on so that means I still host the server on my computer and I didn't want to pay for a host so that why I gave up but I still had a lot of experience with minecraft servers like plugins etc.\n\nI even ran a kinda successful minecraft server back in the day, about 30/40 people playing a day. But I had to shut down my computer every night.\n\nSo, how I said I gave up, but I gained so much experience about hosting and creating protections.\n\nAlright so everything seemed normal.In 2017 when they released fortnite i really wanted a gaming pc so i could play it."
    projC7.innerText = "And finally after a few months I got a gaming PC! I remember it was season 5 and I was playing all day.\n\nSo one day I searched on youtube how can I get free fortnite skins and back in the days youtube didn't really protect the videos for cracking or any illegal stuff like in 2022/2023.\n\nI watched the tutorial it was pretty simple just public combo leech and epic games account checker I followed the tutorial and just cracked my first account even remembered it had 2 skins!"
    projC8.innerText = "If you're wondering why I'm telling you what illegal things I did, firstly I was very young, 13, and secondly, there's no actual proof maybe im just lying.\n\nAnyway I started looking for private methods and found one very HQ method, there was one leecher named smart pastebin leecher, I know what you think leechers are public but this one wasn't!\n\nI started getting so many hits, I had so many accounts I went crazy, I even started selling at school.\n\nThen I was like lets check the accounts for other hits like minecraft,steam,origin and so on .. I found a lot of interesting multi checkers, not only but also brute force ones."
    projC9.innerText = "I got very addicted, I started learning how to do hq combos using sqli, I'll keep that part a secret, anyway after that I started learning about hq proxies, but I realized I either have to buy them or find them very nice method where i can scrape them from the website so it was quite unsuccessful.\n\nWell, enough about the cracking part, I have gained a lot of experience, not only how hackers can crack your password, but also how you can protect yourself, I also didn't mention the checkers and apis..\n\nSo of course over the years I got a lot of viruses from the tools I used, so I learned about vms, vps, sandboxie, etc. I learned how I can remove malwares, backdoors, rats, etc."
    projC10.innerText = "Overall I learned so much, of course this is just a short story of how it all started, I didn't include much."

    projB1.innerText = "It all started with basic html when I was about 10/11 years old."
    projB2.innerText = "Honestly I couldn't do anything myself so I just copied code from youtube and was very proud lol and always coded in notepad.\n\nI didn't know what ide was or even css, I just used notepad and plain html.\n\nSo if you've read my cyber security journey you know I've been hacking accounts so one day I decided to start a Discord group and website and I did."
    projB3.innerText = "It was actually quite successful, I was doing giveaways, I even had an account generator, but the website was very bad, how did I say I only knew pure html so it was trash.\n\nI later removed the discord group and gave up making websites because it was too hard.\n\nYears later a friend of mine said I was some kind of hacker because I was able to build websites and that gave me motivation so I started again!"
    projB4.innerText = "This time I learned about css and started creating html/css projects oh and this time I used actual ide - visual studio code.\n\nEverything was great until I realized that I needed to manage my website to look good on every screen too. It was very difficult and I gave up again..\n\nA year later I came back, learned a lot of properties in css, learned how to position things, learned about containers and learned how to make responsive websites!"
    projB5.innerText = "I have created several websites but then something was missing? Yes Java Script.\n\nActually the java script was very easy to learn so it was a success, now that I know html, css and the front end java script it was time to learn the back end."
    projB6.innerText = "I really struggled with learning the back end but finally after a few months I did that too, learned how to communicate with servers/apis, learned how to host ones and of course node js!"
    projB7.innerText = "I'm a full stack developer now and I'm only 17 so I still have a lot to learn, of course this isn't the full story of my coding journey, maybe I'll update it and include my java and c++ coding journey too."

    projT1.innerText = "I will only include one of my major projects here, if you are curious about my entire project journey, contact me here.\n\nWe are starting with Impbase."
    projT2.innerText = "Impbase was a powerful leak application, it could get any leaked information from discord groups, chats, dark engines, normal engines ... pretty much anything, the project was shut down due to illegal terms.\n\nMy second project Thenix."
    projT3.innerText = "Well coding isn't just my main thing I'm 17 and 88kg calisthenics athlete you can see me on instagram anyway the website was about affiliate marketing and my paid training plans.\n\nMy next project The River."
    projT4.innerText = "A simple private room to chat with strangers, the chat app is recreated from the movie Unfriended.\n\nMy fourth project FastKeyWriter."
    projT5.innerText = "I was inspired by the 10fastfingers website and just recreated my own version. The project is unfinished, so I will work on it in the future, you can still visit it.\n\nMy fifth project My Old Portfolio."
    projT6.innerText = "It wasn't good so I updated it, you can still visit my old one.\n\nOf course, I have more projects, but I don't want to put them here yet, I will work more."

}