import './App.css';
import { List } from './components/List';
import { Song } from './components/Song';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const songs = [
    {
      "name": "Dead Or Alive",
      "lyrics": JSON.stringify(`
        It's all the same, only the names will change
        Every day, it seems we're wastin' away
        Another place where the faces are so cold
        I'd drive all night just to get back home
        I'm a cowboy
        On a steel horse I ride
        I'm wanted dead or alive
        Wanted dead or alive
        Sometimes I sleep, sometimes it's not for days
        The people I meet always go their separate ways
        Sometimes you tell the day by the bottle that you drink
        And times when you're alone, well, all you do is think
        I'm a cowboy
        On a steel horse I ride
        I'm wanted (wanted), dead or alive
        Wanted (wanted), dead or alive
        Oh, and I ride
        Yeah
        Oh, I'm a cowboy
        On a steel horse I ride
        I'm wanted (wanted), dead or alive
        And I walk these streets, a loaded six-string on my back
        I play for keeps 'cause I might not make it back
        I've been everywhere, still I'm standing tall
        I've seen a million faces and I've rocked them all
        'Cause I'm a cowboy
        On a steel horse I ride
        I'm wanted (wanted), dead or alive
        'Cause I'm a cowboy
        I got the night on my side
        And I'm wanted (wanted), dead or alive
        And I ride (and I ride), dead or alive
        I still drive (I still drive), dead or alive
        Dead or alive
        Dead or alive
        Dead or alive
        Dead or alive`),
      "source": "SRvCvsRp5ho",
      "official_video": "youtube link",
      "tabs": "tab link"
    },
    {
      "name": "One",
      "lyrics": JSON.stringify(`
Is it getting better?
Or do you feel the same?
Will it make it easier on you now?
You got someone to blame
You say, one love, one life
When it's one need in the night
One love, we get to share it
Leaves you baby if you don't care for it
Did I disappoint you?
Or leave a bad taste in your mouth?
You act like you never had love
And you want me to go without
Well it's too late tonight
To drag the past out into the light
We're one but we're not the same
We get to carry each other, carry each other
One!
Have you come here for forgiveness?
Have you come to raise the dead?
Have you come here to play Jesus?
To the lepers in your head
Did I ask too much? More than a lot
You gave me nothin' now it's all I got
We're one but we're not the same
Well we hurt each other then we do it again
You say love is a temple, love a higher law
Love is a temple, love the higher law
You ask me to enter but then you make me crawl
And I can't be holdin' on to what you got
When all you got is hurt
One love, one blood
One life, you got to do what you should
One life, with each other
Sisters, brothers
One life but we're not the same
We get to carry each other, carry each other
One
One`),
      "source": "ftjEcrrf7r0",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Brown Eyed Girl",
      "lyrics": JSON.stringify(`
Hey, where did we go?
Days when the rains came
Down in the hollow
Playin' a new game
Laughin' and a-runnin', hey, hey
Skippin' and a-jumpin'
In the misty morning fog with
Our, our hearts a-thumping and you
My brown-eyed girl
And you, my brown-eyed girl
And whatever happened
To Tuesday and so slow?
Going down the old mine with a
Transistor radio
Standing in the sunlight laughing
Hiding 'hind a rainbow's wall
Slipping and sliding
All along the waterfall with you
My brown-eyed girl
You, my brown-eyed girl
Do you remember when we used to sing?
Sha-la-la, la-la, la-la, la-la, la-la tee-da
Just like that
Sha-la-la, la-la, la-la, la-la, la-la tee-da, la-tee-da
So hard to find my way
Now that I'm all on my own
I saw you just the other day
My, how you have grown
Cast my memory back there, Lord
Sometimes I'm overcome thinking 'bout it
Making love in the green grass
Behind the stadium with you
My brown-eyed girl
You, my brown-eyed girl
Do you remember when we used to sing?
Sha-la-la, la-la, la-la, la-la, la-la tee-da
Sha-la-la, la-la, la-la, la-la, la-la tee-da`),
      "source": "kqXSBe-qMGo",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Come as you are",
      "lyrics": JSON.stringify(`
      Come as you are, as you were
      As I want you to be
      As a friend, as a friend
      As an old enemy
      Take your time, hurry up
      Choice is yours, don't be late
      Take a rest as a friend
      As an old
      Memoria, memoria
      Memoria, memoria
      Come doused in mud, soaked in bleach
      As I want you to be
      As a trend, as a friend
      As an old
      Memoria, memoria
      Memoria, memoria
      And I swear that I don't have a gun
      No, I don't have a gun
      No, I don't have a gun
      Memoria, memoria
      Memoria, memoria
      (No I don't have a gun)
      And I swear that I don't have a gun
      No I don't have a gun
      No I don't have a gun
      No I don't have a gun
      No I don't have a gun`),
      "source": "z9LiPuVRyU8",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Wish you were here",
      "lyrics": JSON.stringify(`
      So, so you think you can tell
      Heaven from hell?
      Blue skies from pain?
      Can you tell a green field
      From a cold steel rail?
      A smile from a veil?
      Do you think you can tell?
      Did they get you to trade
      Your heroes for ghosts?
      Hot ashes for trees?
      Hot air for a cool breeze?
      Cold comfort for change?
      Did you exchange
      A walk-on part in the war
      For a leading role in a cage?
      How I wish, how I wish you were here
      We're just two lost souls
      Swimming in a fish bowl
      Year after year
      Running over the same old ground
      What have we found?
      The same old fears
      Wish you were here
      `),
      "source": "GrvBYMTscmE",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Little Talks",
      "lyrics": JSON.stringify(`
      I don't like walking around this old and empty house
      So hold my hand, I'll walk with you my dear
      The stairs creak as you sleep
      It's keeping me awake
      It's the house telling you to close your eyes
      And some days I can't even dress myself
      It's killing me to see you this way
      'Cause though the truth may vary
      This ship will carry our bodies safe to shore
      There's an old voice in my head
      That's holding me back
      Well, tell her that I miss our little talks
      Soon it will be over and buried with our past
      We used to play outside when we were young
      And full of life and full of love
      Some days I don't know if I am wrong or right
      Your mind is playing tricks on you, my dear
      'Cause though the truth may vary
      This ship will carry our bodies safe to shore
      Don't listen to a word I say
      (Hey)
      The screams all sound the same
      (Hey)
      And though the truth may vary
      This ship will carry our bodies safe to shore
      You're gone, gone, gone away
      I watched you disappear
      All that's left is a ghost of you
      Now we're torn, torn, torn apart
      There's nothing we can do
      Just let me go, we'll meet again soon
      Now wait, wait, wait for me, please hang around
      I'll see you when I fall asleep
      Don't listen to a word I say
      (Hey)
      The screams all sound the same
      (Hey)
      Though the truth may vary
      This ship will carry our bodies safe to shore
      Don't listen to a word I say
      (Hey)
      The screams all sound the same
      (Hey)
      Though the truth may vary
      This ship will carry our bodies safe to shore
      Though the truth may vary
      This ship will carry our bodies safe to shore
      Though the truth may vary
      This ship will carry our bodies safe to shore`),
      "source": "ghb6eDopW8I",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "All I Want Is You",
      "lyrics": JSON.stringify(`
      You say you want
      Diamonds on a ring of gold
      You say you want
      Your story to remain untold
      But all the promises we make
      From the cradle to the grave
      When all I want is you
      You say you'll give me
      A highway with no one on it
      Treasure just to look upon it
      All the riches in the night
      You say you'll give me
      Eyes in a moon of blindness
      A river in a time of dryness
      A harbor in the tempest
      But all the promises we make
      From the cradle to the grave
      When all I want is you
      You say you want
      Your love to work out right
      To last with me through the night
      You say you want
      Diamonds on a ring of gold
      Your story to remain untold
      Your love not to grow cold
      All the promises we break
      From the cradle to the grave
      When all I want is you
      You all I want is
      You all I want is
      You all I want is
      You`),
      "source": "un-rfEyPBO4",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Save Tonight",
      "lyrics": JSON.stringify(`
      Go on and close the curtains
'Cause all we need is candlelight
You and me, and a bottle of wine
Gonna hold you tonight, uh, yeah
Well, we know I'm going away
And how I wish, I wish it weren't so
So take this wine and drink with me
Let's delay our misery
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
There's a log on the fire
And it burns like me for you
Tomorrow comes with one desire
To take me away, oh, it's true
It ain't easy to say goodbye
Darlin', please, don't start to cry
'Cause, girl, you know I've got to go, oh
And, Lord, I wish it wasn't so
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Tomorrow comes to take me away
I wish that I, that I could stay
But, girl, you know I've got to go, oh
And, Lord, I wish it wasn't so
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone
Save tonight
And fight the break of dawn
Come tomorrow
Tomorrow I'll be gone`),
      "source": "un-rfEyPBO4",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Desire",
      "lyrics": JSON.stringify(`
      Lover, I'm off the streets
      Gonna go where the bright lights
      And the big city meet
      With a red guitar, on fire
      Desire
      She's a candle burnin' in my room
      Yeah, I'm like the needle
      The needle and spoon
      Over the counter, with a shotgun
      Pretty soon, everybody's got one
      I'm in a fever, when I'm beside her
      Desire
      Desire
      And the fever, gettin' higher
      Desire
      Desire
      Burning
      Burning
      She's the dollars
      She's my protection
      Yeah, she's a promise
      In the year of election
      Oh sister, I can't let you go
      Like a preacher stealin' hearts at a travellin' show
      For love or money, money, money
      Money, money, money, money, money
      Money, money, money
      And the fever, gettin' higher
      Desire
      Desire
      Desire
      Desire
      Desire
      Desire, hey`),
      "source": "un-rfEyPBO4",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Hearth of Gold",
      "lyrics": JSON.stringify(`
      I want to live
      I want to give
      I've been a miner
      For a heart of gold
      It's these expressions
      I never give
      That keep me searching
      For a heart of gold
      And I'm getting old
      Keep me searching
      For a heart of gold
      And I'm getting old
      I've been to Hollywood
      I've been to Redwood
      I crossed the ocean
      For a heart of gold
      I've been in my mind
      It's such a fine line
      That keeps me searching
      For a heart of gold
      And I'm getting old
      Keeps me searching
      For a heart of gold
      And I'm getting old
      Keep me searching
      For a heart of gold
      You keep me searching
      And I'm growing old
      Keep me searching
      For a heart of gold
      I've been a miner
      For a heart of gold`),
      "source": "un-rfEyPBO4",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Polly",
      "lyrics": JSON.stringify(`
    Polly wants a cracker
I think I should get off her first
I think she wants some water
To put out the blow torch
Isn't me, have a seed
Let me clip your dirty wings
Let me take a ride, cut yourself
Want some help, please myself
Got some rope, haven't told
Promise you, have been true
Let me take a ride, cut yourself
Want some help, please myself
Polly wants a cracker
Maybe she would like some food
She asked me to untie her
A chase would be nice for a few
Isn't me, have a seed
Let me clip your dirty wings
Let me take a ride, cut yourself
Want some help, please myself
Got some rope, haven't told
Promise you, have been true
Let me take a ride, cut yourself
Want some help, please myself
Polly said
Polly says her back hurts
She's just as bored as me
She caught me off my guard
Amazes me the will of instinct
Isn't me, have a seed
Let me clip your dirty wings
Let me take a ride, cut yourself
Want some help, please myself
Got some rope, haven't told
Promise you, have been true
Let me take a ride, cut yourself
Want some help, please myself`),
      "source": "3H0NHHKBemg",
      "official_video": 4,
      "notes": 5
    },
    {
      "name": "Deniz ustu kopurur",
      "lyrics": JSON.stringify(`
    Deniz üstü köpürür hey canım rinna nay rinna rinna nay
Kayığa da binsem götürür hey canım hey
Benim de şu cihana gelişim hey canım rinna nay rinna rinna nay
Bir güzelden ötürü hey canım hey
Deniz üstü yelkenden hey canım rinna nay rinna rinna nay
Ecel geldi erkenden hey canım hey
Denizin ortasında hey canım rinna nay rinna rinna nay
Mum yanar sofrasında hey canım hey
Benim de şu cihandan gidişim hey canım rinna nay rinna rinna nay
Memleket sevdasından hey canım hey
Benim de bu cihandan gidişim hey canım rinna nay rinna rinna nay
Memleket sevdasından
Memleket sevdasından
Memleket sevdasından
Memleket sevdasından
Hey canım hey
Hey hey`),
      "source": "CGVpTp3cOpw",
      "official_video": 4,
      "notes": 5
    },
    
  ]

  //const songs = songs;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<List songs={songs} />} />
          <Route path="song/:id" element={<Song songs={songs} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
