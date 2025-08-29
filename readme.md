1.  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    উত্তরঃ getElementById একটি নির্দিষ্ট id এর element খুঁজে বের করে ফেরত দেয়, যেহেতু html এ প্রতিটি id unique হয়। আর getElementsByClassName নির্দিষ্ট class যুক্ত সব element একসাথে খুঁজে বের করে html collection আকারে ফেরত দেয়। অর্থাৎ, getElementById সবসময় একটি element দেয় কিন্তু getElementsByClassName একাধিক element দিতে পারে। querySelector এবং querySelectorAll CSS selector ব্যবহার করে element খুঁজে বের করার জন্য ব্যবহার হয়। querySelector কেবলমাত্র প্রথম যেটি selector এর সাথে মিলে যায় সেটি খুঁজে বের করে রিটার্ন করে, এটি সবসময় একটি element ফেরত দেয়। querySelectorAll নির্দিষ্ট selector এর সাথে মিলে যাওয়া সব element খুঁজে বের করে এবং সেগুলোকে NodeList আকারে ফেরত দেয়।

2.  How do you **create and insert a new element into the DOM**?
    উত্তরঃ প্রথমে document.createElement() ব্যবহার করে একটি নতুন element তৈরি করতে হবে। তারপর element.innerHTML/ element.textContent ব্যবহার করে এর ভেতরে কন্টেন্ট যোগ করতে হবে, setAttribute() দিয়ে attribute ও সেট করা যায়। তারপর appendChild() করে সেটিকে কোনো parent element এর মধ্যে যোগ করতে হবে। যেমনঃ
    let paragraph = document.createElement("p");
    paragraph.textContent = "new p text";
    document.body.appendChild(paragraph);

3.  What is **Event Bubbling** and how does it work?
    উত্তরঃ child element-এ event ঘটলে প্রথমে child element-এ capture হয়, তারপর ধাপে ধাপে তার parent, তার parent হয়ে document পর্যন্ত উপরে উঠে যায়, event টি নিচ থেকে ওপরে propagate করে। যেমনঃ একটি button যদি div এর মধ্যে থাকে এবং button-এ click করা হয়, তাহলে প্রথমে button-এর click event trigger হবে, এরপর সেই event div-এ যাবে, তারপর আরও উপরের element-গুলোতে যাবে। এই প্রক্রিয়াকে event bubbling বলা হয়।

    4. What is **Event Delegation** in JavaScript? Why is it useful?
       উত্তরঃ Event Delegation হলো অনেকগুলো child element-এর পরিবর্তে তাদের parent element-এ একটি single event listener বসানো। dom এ event bubbling থাকায় child element-এ ঘটে যাওয়া event parent element পর্যন্ত propagate করে আসে। এরপর parent element-এর event listener-এ event.target চেক করে কোন child element-এ event ঘটেছে তা শনাক্ত করতে হয়। এটি বিশেষভাবে প্রয়জন যখন dynamic content থাকে, পরে JavaScript দিয়ে নতুন element যোগ করলে parent element-এ থাকা listener নতুন element-এও কাজ করবে। event delegation ব্যবহার করলে কোড কম হয়, performance ভালো হয়, এবং নতুন element-এর জন্য আলাদা listener দেওয়ার দরকার হয় না।

    5. What is the difference between **preventDefault() and stopPropagation()** methods?
       উত্তরঃ preventDefault() এবং stopPropagation() দুটি আলাদা কাজের জন্য ব্যবহার হয়। preventDefault() event-এর default behavior বন্ধ করে।যেম্নঃ একটি ফর্ম submit করলে page reload হয়,এটা ফর্মের default behavior; event.preventDefault() ব্যবহার করলে page reload বন্ধ হয়ে যাবে।
       আর stopPropagation() method event-এর bubble বা propagation বন্ধ করে দেয়, event parent element-এ আর propagate হবে না। উদাহরণঃ যদি একটি button div-এর মধ্যে থাকে এবং button-এ click হয়, stopPropagation() দিলে div-এ থাকা click listener trigger হবে না।
       এককথায়, preventDefault() default action বন্ধ করে, আর stopPropagation() event-এর উপরে উঠা (bubbling) বন্ধ করে।
