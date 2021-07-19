<template>
    <div>
        <h1>Discover</h1>

        {{ message }} {{ messageComputed }}
        <button @click="call">Change</button>
        <input type="text" v-model="title">
        <counter @update="updateCount" />
        <counter :start="5" :max="10" @update="updateCount"></counter>
        {{ totalCount }}
        {{ state.count }}

        <mon-composant :title="title"></mon-composant>
        <MonComposant></MonComposant>

        <div v-for="(user, i) in users" :key="i">
            <user-form v-model="users[i]">
                <p>Vous modifiez l'utilisateur {{ user.firstName }}</p>

                <template #success>
                    <p>L'utilisateur {{ user.firstName }} a bien été modifié.</p>
                </template>
            </user-form>
        </div>
        {{ users }}
    </div>
</template>

<script>
import Counter from '../components/Counter';
import MonComposant from '../components/MonComposant';
import UserForm from '../components/UserForm';
import { store } from '../main'

export default {
    components: {
        Counter, MonComposant, UserForm
    },
    data() {
        return {
            users: [
                { firstName: 'Fiorella', lastName: 'Mota' },
                { firstName: 'Matthieu', lastName: 'Mota' }
            ],
            message: 'Vue JS',
            totalCount: 5,
            state: store.state
        };
    },
    methods: {
        call() {
            this.message = 'Changement';
        },
        updateCount(event) {
            console.log(event);
            this.totalCount += event;
        }
    },
    computed: {
        messageComputed() {
            return this.message.toUpperCase();
        }
    }
}
</script>
