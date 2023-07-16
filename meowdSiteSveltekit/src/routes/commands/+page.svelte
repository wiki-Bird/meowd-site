
<style>
    @import '/src/main.css';
    @import '/src/subpage.css';
    @import '/src/commands.css';
</style>

<script lang="ts">
    import { onMount } from 'svelte';

    let options = [
        {name: "Moderation", content: `
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
                    </div>`
        },
        {name: "Utility", content: `
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
                        <div class="commandName commandRow">/embed</div>
                        <div class="commandDesc commandRow">Create a custom embed.</div>
                        <div class="commandExample commandRow">/embed [title] [description] [footer] [thumbnail] [image]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/whois</div>
                        <div class="commandDesc commandRow">Information about a user's account.</div>
                        <div class="commandExample commandRow">/whois [@user]</div>
                    </div>`
        },
        {name: "Fun", content: `
                    <div class="commandBlock">
                        <div class="commandName commandRow">/otter</div>
                        <div class="commandDesc commandRow">Get a cute otter picture.</div>
                        <div class="commandExample commandRow">/otter [number]</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/imgedit</div>
                        <div class="commandDesc commandRow">Edit an image</div>
                        <div class="commandExample commandRow">/imgedit [@user/attachment/blank] [editType] [text]</div>
                    </div>
                    `
        },
        {name: "Info", content: `
                    <div class="commandBlock">
                        <div class="commandName commandRow">/stats</div>
                        <div class="commandDesc commandRow">See Meowd's stats.</div>
                        <div class="commandExample commandRow">/stats</div>
                    </div>
                    <div class="commandBlock">
                        <div class="commandName commandRow">/ping</div>
                        <div class="commandDesc commandRow">See Meowd's ping.</div>
                        <div class="commandExample commandRow">/ping</div>
                    </div>`

        },
        {name: "Config", content: `
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
                    `
        },
        {name: "Misc", content: `
                    <div class="commandBlock">
                        <div class="commandName commandRow">/help</div>
                        <div class="commandDesc commandRow">Get help.</div>
                        <div class="commandExample commandRow">/help</div>
                    </div>`
        }
    ]


    let selectedOption: typeof options[number];
    


    function changeOption(option: { name: string; content: string; }) {
        selectedOption = option;
    }

    onMount(() => {
        selectedOption = options[0];
    })
</script>

<main>
    <div class="navbar">
        <a href="/" class="nav" id="brand"><div class="branding">
            <img src="/lgoo1.png" class="logoHeader" alt="Meowd Logo" /> 
            MEOWD
        </div></a>
        <div class="links">
            <a href="/features" class="nav">Features</a>
            <a href="/commands" class="nav" id="selected">Commands</a>
            <a href="/guide" class="nav">Guide</a>
            <a href="https://discord.com/oauth2/authorize?client_id=1086188667678244955&scope=bot&permissions=8" target="_blank" rel="noreferrer"  class="nav" id="addBtn">INVITE</a>
        </div>
    </div>
    <div class="mainContent2">
        <h3>Commands</h3>
        <div class="commandBreak">

            <div class="commandTypes commandBoth">
                <div class="titleCommands">
                    Groups
                </div>
                {#each options as option}
                    {#if selectedOption === option}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="commandType selectedCmd" on:click={() => changeOption(option)}>
                            {option.name}
                        </div>
                    {:else}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="commandType" on:click={() => changeOption(option)}>
                            {option.name}
                        </div>
                    {/if}
                {/each}
            </div>


            <div class="commandsMain commandBoth">
                <div class="titleCommands">
                    {#if selectedOption}
                        {selectedOption.name}
                    {/if}
                </div>
                <div class="commmandList">
                    <!-- show the contents of the selected option -->
                    {#if selectedOption}
                        {@html selectedOption.content}
                    {/if}

                </div>
            </div>
        </div>
    </div>

</main>